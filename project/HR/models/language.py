from django.db import models

# Create your models here.
class Language(models.Model):
     
    language = models.CharField(max_length=50)
    reading = models.CharField(max_length=50)
    speaking = models.CharField(max_length=50)
    listening = models.CharField(max_length=50)
    writing = models.CharField(max_length=50)