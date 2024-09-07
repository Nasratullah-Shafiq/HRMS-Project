from django.db import models

# Create your models here.
class Exam(models.Model):
    
    subject = models.CharField(max_length=50)
    exam_date = models.CharField(max_length=50)
    exam_result = models.CharField(max_length=50)
    exam_score = models.CharField(max_length=50)
    exam_remarks = models.CharField(max_length=50)
    exam_type = models.CharField(max_length=1, choices=[
        ('W', 'Written Test'),
        ('I', 'Interview'),
        ('T', 'Technical'),
        ('C', 'Computerized Exam'),
        ('E', 'English'),
    ], default = 'I')
    
