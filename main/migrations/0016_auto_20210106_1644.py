# Generated by Django 3.1.2 on 2021-01-06 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_auto_20210106_1613'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ruletscore',
            name='score',
        ),
        migrations.AddField(
            model_name='ruletscore',
            name='nam',
            field=models.CharField(default='e', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ruletscore',
            name='scor',
            field=models.CharField(default='e', max_length=50),
            preserve_default=False,
        ),
    ]