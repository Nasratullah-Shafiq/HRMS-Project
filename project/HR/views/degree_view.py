from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import DegreeSerializer
from HR.models.education import Degree
# Create your views here.

@csrf_exempt
def degreeApi(request,id=0):
    if request.method=='GET':
        degree = Degree.objects.all()
        degree_serializer=DegreeSerializer(degree,many=True)
        return JsonResponse(degree_serializer.data,safe=False)
    elif request.method=='POST':
        degree_data=JSONParser().parse(request)
        degree_serializer=DegreeSerializer(data=degree_data)
        if degree_serializer.is_valid():
            degree_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        degree_data=JSONParser().parse(request)
        degree=Degree.objects.get(id=id)
        degree_serializer=DegreeSerializer(degree,data=degree_data)
        if degree_serializer.is_valid():
            degree_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        student=Degree.objects.get(id=id)
        student.delete()
        return JsonResponse("Deleted Successfully",safe=False)
