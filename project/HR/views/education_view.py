from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import educationSerializer, UniversitySerializer, DegreeSerializer, FacultySerializer, MajorSerializer
from HR.models.education import Education, University, Degree, Faculty, Major

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
            return JsonResponse("Data Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Education record
        education_data = JSONParser().parse(request)
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return JsonResponse("Education not found", safe=False, status=404)

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
        major=Major.objects.get(id=id)
        major.delete()
        return JsonResponse("Deleted Successfully",safe=False)
