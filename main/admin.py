from django.contrib import admin

from .models import BlogComment
from .models import CounterScore
from .models import HighAndLowScore
from .models import RuletScore
from .models import WritePosting

admin.site.register(BlogComment)
admin.site.register(CounterScore)
admin.site.register(HighAndLowScore)
admin.site.register(RuletScore)
admin.site.register(WritePosting)

# Register your models here.
