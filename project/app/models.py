from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    father_name = models.CharField(max_length=255)
    course = models.CharField(max_length=255)
    fee = models.IntegerField()
    address = models.CharField(max_length=255)

class Course(models.Model):
    course = models.CharField(max_length=25)
    fee = models.IntegerField()