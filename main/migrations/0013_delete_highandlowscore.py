# Generated by Django 3.1.2 on 2021-01-05 10:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_delete_comment'),
    ]

    operations = [
        migrations.DeleteModel(
            name='HighAndLowScore',
        ),
    ]
