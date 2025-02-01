from django.db import models

# Create your models here.
class PropertyType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Property(models.Model):
    
    property_type = models.ForeignKey(PropertyType, on_delete=models.CASCADE)
    price = models.CharField(max_length=50)
    remarks = models.CharField(max_length=255)