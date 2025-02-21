from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import healthSerializer
from HR.models.Health import Health
# Create your views here.

@csrf_exempt
def healthApi(request,id=0):
    if request.method=='GET':
        health = Health.objects.all()
        health_serializer=healthSerializer(health,many=True)
        return JsonResponse(health_serializer.data,safe=False)
    
    elif request.method=='POST':
        health_data=JSONParser().parse(request)
        health_serializer=healthSerializer(data=health_data)
        if health_serializer.is_valid():
            health_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    elif request.method=="PUT":
        health_data=JSONParser().parse(request)
        health=Health.objects.get(id=id)
        health_serializer=healthSerializer(health,data=health_data)
        if health_serializer.is_valid():
            health_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    elif request.method=="DELETE":
        health=Health.objects.get(id=id)
        health.delete()
        return JsonResponse("Deleted Successfully",safe=False)
