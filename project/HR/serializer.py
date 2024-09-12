from rest_framework import serializers
# from .models import Student
# from HR.models import reward, exam, travel, organization

from HR.models.course import Course
from HR.models.Student import Student  # Correct import path
from HR.models.employee import Employee
from HR.models.Health import Health
from HR.models.education import Education, Faculty, University, Degree
# from HR.models.education import Faculty
# from HR.models.education import University
# from HR.models.education import Degree
# from HR.models.relative import Relative
# from HR.models.experience import Experience, Status, Step, Grade, JobPosition, OrganizationTpye
# from HR.models.exam import Exam
from HR.models.country import Country
# from HR.models.province import Province
# from HR.models.district import District
# from HR.models.document import Document
# from HR.models.property import Property, PropertyType
# from HR.models.publication import Publication
# from HR.models.punishment import Punishment
# from HR.models.reward import Reward, RewardType
# from HR.models.training import Training
# from HR.models.travel import Travel
# from HR.models.organization import Organization


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

# class examSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Exam
#         fields = '__all__'
 
class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
        
class educationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

# class experienceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Experience
#         fields = '__all__'

# class stepSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Step
#         fields = '__all__'

# class jobPositionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = JobPosition
#         fields = '__all__'

# class organizationTypeerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrganizationTpye
#         fields = '__all__'

# class gradeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Grade
#         fields = '__all__'

# class experienceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Status
#         fields = '__all__'

class healthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Health
        fields = '__all__'

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class DegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = '__all__'

class courseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

# class MajorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Major
#         fields = '__all__'

# class organizationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Organization
#         fields = '__all__'

# class rewardSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Reward
#         fields = '__all__'

# class countrySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Country
#         fields = '__all__'

# class districtSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = District
#         fields = '__all__'

# class provinceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Province
#         fields = '__all__'

# class documentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Document
#         fields = '__all__'

# class propertySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Property
#         fields = '__all__'

# class travelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Travel
#         fields = '__all__'

# class trainingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Training
#         fields = '__all__'

# class publicationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Publication
#         fields = '__all__'

# class propertyTypeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PropertyType
#         fields = '__all__'

# class rewardTypeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = RewardType
#         fields = '__all__'