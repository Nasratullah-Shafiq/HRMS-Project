from django.db import models

# Create your models here.
class Health(models.Model):
    status = models.CharField(max_length=255)
    report = models.CharField(max_length=255)
    remarks = models.CharField(max_length=255)
    