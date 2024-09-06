from django.db import models

# Create your models here.
class Employee(models.Model):

    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    training_location = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    father_name = models.CharField(max_length=50)
    grand_father_name = models.CharField(max_length=50)
    training_start_date = models.DateField()
    training_end_date = models.DateField()

    training_certification = models.CharField(max_length=50)
    training_remarks = models.CharField(max_length=255)