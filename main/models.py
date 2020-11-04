from django.db import models
from django.utils import timezone


# Create your models here.
class Comment(models.Model):
  comment = models.TextField()
  time = models.DateTimeField('date published')

  def __str__(self):
    return self.comment
  def 최근글(self):
    return self.time >= timezone.now() - datetime.timedelta(days=1)