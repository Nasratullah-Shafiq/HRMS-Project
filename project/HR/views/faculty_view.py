from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import FacultySerializer
from HR.models.education import Faculty
# Create your views here.

@csrf_exempt
def facultyApi(request,id=0):
    if request.method=='GET':
        faculty = Faculty.objects.all()
        faculty_serializer=FacultySerializer(faculty,many=True)
        return JsonResponse(faculty_serializer.data,safe=False)
    elif request.method=='POST':
        faculty_data=JSONParser().parse(request)
        faculty_serializer=FacultySerializer(data=faculty_data)
        if faculty_serializer.is_valid():
            faculty_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        faculty_data=JSONParser().parse(request)
        faculty=Faculty.objects.get(id=id)
        faculty_serializer=FacultySerializer(faculty,data=faculty_data)
        if faculty_serializer.is_valid():
            faculty_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        faculty=Faculty.objects.get(id=id)
        faculty.delete()
        return JsonResponse("Deleted Successfully",safe=False)
