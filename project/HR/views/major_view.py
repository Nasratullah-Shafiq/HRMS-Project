from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import MajorSerializer
from HR.models.education import Major
# Create your views here.

@csrf_exempt
def majorApi(request,id=0):
    if request.method=='GET':
        major = Major.objects.all()
        major_serializer=MajorSerializer(major,many=True)
        return JsonResponse(major_serializer.data,safe=False)
    elif request.method=='POST':
        major_data=JSONParser().parse(request)
        major_serializer=MajorSerializer(data=major_data)
        if major_serializer.is_valid():
            major_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        major_data=JSONParser().parse(request)
        major=Major.objects.get(id=id)
        major_serializer=MajorSerializer(major_data=major_data)
        if major_serializer.is_valid():
            major_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        major=major.objects.get(id=id)
        major.delete()
        return JsonResponse("Deleted Successfully",safe=False)
