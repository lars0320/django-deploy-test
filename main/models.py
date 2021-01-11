import datetime

from django.db import models
from django.utils import timezone


# Create your models here.

class BlogComment(models.Model):
  postID = models.CharField(max_length=50)
  userName = models.CharField(max_length=50)
  content = models.TextField()
  time = models.DateTimeField('date published')
  def __str__(self):
    return self.postID + "번 글" + self.userName

class CounterScore(models.Model):
  name = models.TextField()
  def __str__(self):
    return self.name

class HighAndLowScore(models.Model):
  name = models.CharField(max_length=50)
  level = models.CharField(max_length=10)
  tryCount = models.CharField(max_length=50)
  def __str__(self):
    return self.name + self.level + self.tryCount

class RuletScore(models.Model):
  name = models.CharField(max_length=50)
  score = models.CharField(max_length=50)
  def __str__(self):
    return self.name + self.score

class WritePosting(models.Model):
  title = models.CharField(max_length=50)
  content = models.TextField()
  writeTime = models.DateTimeField('date published')

  def __str__(self):
    return self.title