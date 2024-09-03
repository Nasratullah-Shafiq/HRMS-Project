from rest_framework import serializers
# from .models import Student
from HR.models.Course import Course
from HR.models.Student import Student  # Correct import path
from HR.models.employee import Employee

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'  # Include all fields from the Student model
        # Alternatively, specify specific fields:
        # fields = ['id', 'name', 'age', ...]  # Replace with actual field names

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'