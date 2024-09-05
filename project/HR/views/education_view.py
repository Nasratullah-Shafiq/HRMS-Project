from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import educationSerializer
from HR.models.education import Education

# Create your views here.

@csrf_exempt
def educationApi(request, id=0):
    if request.method == 'GET':
        # Get all Education Data
        educations = Education.objects.all()
        education_serializer = educationSerializer(educations, many=True)
        return JsonResponse(education_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new Education record
        education_data = JSONParser().parse(request)
        education_serializer = educationSerializer(data=education_data)
        if education_serializer.is_valid():
            education_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Education record
        education_data = JSONParser().parse(request)
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        education_serializer = educationSerializer(education, data=education_data)
        if education_serializer.is_valid():
            education_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Education Data
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        education.delete()
        return JsonResponse("Deleted Successfully", safe=False)
