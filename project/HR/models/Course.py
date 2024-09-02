from django.db import models
# from .course import course

# Create your models here.

class Course(models.Model):
    course = models.CharField(max_length=25)
    fee = models.IntegerField()