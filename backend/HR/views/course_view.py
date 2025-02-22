from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.models import Course
from HR.serializer import CourseSerializer
# Create your views here.


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
