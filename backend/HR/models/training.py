from django.db import models
from HR.models import course 
# Create your models here.

class Training(models.Model):
    course_id = models.ForeignKey(course, on_delete=models.CASCADE)
    training_location = models.CharField(max_length=50)
    training_start_date = models.DateField()
    training_end_date = models.DateField()
    training_certification = models.CharField(max_length=50)
    training_remarks = models.CharField(max_length=255)