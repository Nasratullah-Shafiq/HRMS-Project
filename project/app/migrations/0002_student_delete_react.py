# Generated by Django 5.1 on 2024-08-25 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('fee', models.IntegerField(verbose_name=12)),
            ],
        ),
        migrations.DeleteModel(
            name='React',
        ),
    ]
