from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from app.serializer import StudentSerializer
from app.models import Student
from app.models import Course
from app.serializer import CourseSerializer
# Create your views here.

@csrf_exempt
def studentApi(request,id=0):
    if request.method=='GET':
        student = Student.objects.all()
        student_serializer=StudentSerializer(student,many=True)
        return JsonResponse(student_serializer.data,safe=False)
    elif request.method=='POST':
        stuent_data=JSONParser().parse(request)
        student_serializer=StudentSerializer(data=stuent_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        student_data=JSONParser().parse(request)
        student=Student.objects.get(id=id)
        student_serializer=StudentSerializer(student,data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        student=Student.objects.get(id=id)
        student.delete()
        return JsonResponse("Deleted Successfully",safe=False)



@csrf_exempt
def courseApi(request,id=0):
    if request.method=='GET':
        course = Course.objects.all()
        course_serializer=CourseSerializer(course,many=True)
        return JsonResponse(course_serializer.data,safe=False)
    elif request.method=='POST':
        course_data=JSONParser().parse(request)
        course_serializer=CourseSerializer(data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Course Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        course_data=JSONParser().parse(request)
        course=Course.objects.get(id=id)
        course_serializer=CourseSerializer(course,data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        course=Course.objects.get(id=id)
        course.delete()
        return JsonResponse("Course Data Deleted Successfully",safe=False)
