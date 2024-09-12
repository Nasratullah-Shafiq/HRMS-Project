from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import UniversitySerializer
from HR.models.education import University
# Create your views here.

@csrf_exempt
def universityApi(request,id=0):
    if request.method=='GET':
        university = University.objects.all()
        university_serializer=UniversitySerializer(university,many=True)
        return JsonResponse(university_serializer.data,safe=False)
    elif request.method=='POST':
        university_data=JSONParser().parse(request)
        university_serializer=UniversitySerializer(data=university_data)
        if university_serializer.is_valid():
            university_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        university_data=JSONParser().parse(request)
        university=University.objects.get(id=id)
        university_serializer=UniversitySerializer(university,data=university_data)
        if university_serializer.is_valid():
            university_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        university=university.objects.get(id=id)
        university.delete()
        return JsonResponse("Deleted Successfully",safe=False)
