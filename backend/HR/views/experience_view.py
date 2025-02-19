from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import ExperienceSerializer, OrganizationTypeSerializer, StepSerializer, JobPositionSerializer, GradeSerializer, StatusSerializer
from HR.models.experience import Experience, OrganizationType, Step, JobPosition, Grade, Status

# Create your views here.

@csrf_exempt
def experienceApi(request, id=0):
    if request.method == 'GET':
        # Get all employees
        experience = Experience.objects.all()
        experience_serializer = ExperienceSerializer(experience, many=True)
        return JsonResponse(experience_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        experience_data = JSONParser().parse(request)
        experience_serializer = ExperienceSerializer(data=experience_data)
        if experience_serializer.is_valid():
            experience_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing employee
        experience_data = JSONParser().parse(request)
        try:
            employee = Experience.objects.get(id=id)
        except Experience.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        experience_serializer = ExperienceSerializer(experience, data=experience_data)
        if experience_serializer.is_valid():
            experience_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an employee
        try:
            experience = Experience.objects.get(id=id)
        except Experience.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        experience.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def organizationTypeApi(request,id=0):
    if request.method=='GET':
        organization_type = OrganizationType.objects.all()
        organization_type_serializer=OrganizationTypeSerializer(organization_type,many=True)
        return JsonResponse(organization_type_serializer.data,safe=False)
    elif request.method=='POST':
        organization_type_data=JSONParser().parse(request)
        organization_type_serializer=OrganizationTypeSerializer(data=organization_type_data)
        if organization_type_serializer.is_valid():
            organization_type_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        organization_type_data=JSONParser().parse(request)
        organization_type=OrganizationType.objects.get(id=id)
        organization_type_serializer=OrganizationTypeSerializer(organization_type_data=organization_type_data)
        if organization_type_serializer.is_valid():
            organization_type_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        organization_type=organization_type.objects.get(id=id)
        organization_type.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def statusApi(request,id=0):
    if request.method=='GET':
        status = Status.objects.all()
        status_serializer = StatusSerializer(status,many=True)
        return JsonResponse(status_serializer.data,safe=False)
    elif request.method=='POST':
        status_data=JSONParser().parse(request)
        status_serializer = StatusSerializer(data=status_data)
        if status_serializer.is_valid():
            status_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        status_data=JSONParser().parse(request)
        status = Status.objects.get(id=id)
        status_serializer = StatusSerializer(status_data=status_data)
        if status_serializer.is_valid():
            status_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        status = status.objects.get(id=id)
        status.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    
@csrf_exempt
def jobPositionApi(request, id=0):
    if request.method == 'GET':
        # Get all employees
        job_position = JobPosition.objects.all()
        job_position_serializer = JobPositionSerializer(job_position, many=True)
        return JsonResponse(job_position_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        job_position_data = JSONParser().parse(request)
        job_position_serializer = JobPositionSerializer(data=job_position_data)
        if job_position_serializer.is_valid():
            job_position_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing employee
        job_position_data = JSONParser().parse(request)
        try:
            job_position = JobPosition.objects.get(id=id)
        except JobPosition.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        job_position_serializer = JobPositionSerializer(job_position, data=job_position_data)
        if job_position_serializer.is_valid():
            job_position_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an employee
        try:
            job_position = JobPosition.objects.get(id=id)
        except JobPosition.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        job_position.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def gradeApi(request, id=0):
    if request.method == 'GET':
        # Get all Grades
        grade = Grade.objects.all()
        grade_serializer = GradeSerializer(grade, many=True)
        return JsonResponse(grade_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        grade_data = JSONParser().parse(request)
        grade_serializer = GradeSerializer(data=grade_data)
        if grade_serializer.is_valid():
            grade_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing employee
        grade_data = JSONParser().parse(request)
        try:
            grade = Grade.objects.get(id=id)
        except Grade.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        job_position_serializer = GradeSerializer(grade, data=grade_data)
        if grade_serializer.is_valid():
            grade_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an employee
        try:
            grade = Grade.objects.get(id=id)
        except Grade.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        grade.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def stepApi(request, id=0):
    if request.method == 'GET':
        # Get all Steps
        step = Step.objects.all()
        step_serializer = StepSerializer(step, many=True)
        return JsonResponse(step_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new Steps
        step_data = JSONParser().parse(request)
        step_serializer = StepSerializer(data=step_data)
        if step_serializer.is_valid():
            step_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Steps
        step_data = JSONParser().parse(request)
        try:
            grade = Step.objects.get(id=id)
        except Step.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        step_serializer = GradeSerializer(grade, data=step_data)
        if step_serializer.is_valid():
            step_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Steps
        try:
            step = Step.objects.get(id=id)
        except Step.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        step.delete()
        return JsonResponse("Deleted Successfully", safe=False)
