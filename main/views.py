import json
import datetime

from django.shortcuts import render, redirect
from django import views
from .models import BlogComment, CounterScore, HighAndLowScore, RuletScore, WritePosting
from django.http import HttpResponse
from ast import literal_eval 

class ProfileView(views.View):
    def get(self, request):
        return render(request, 'profile.html')

class ResumeView(views.View):
    def get(self, request):
        return render(request, 'resume.html')

class BlogView(views.View):
    def get(self, request):
        postings = [{
            'id': (posting.id),
            'title': (posting.title),
            'content': (posting.content),
            'time': (str(posting.writeTime))
            }
            for posting in WritePosting.objects.all()
        ]
        return render(request, 'blog.html',
        {
            'postings': json.dumps(postings)
        })

class PostingView(views.View):
    def get(self, request, posting_id):
        postings = [{
            'address': (posting_id),
            'id': (posting.id),
            'title': (posting.title),
            'content': (posting.content),
            'time': (str(posting.writeTime))
            }
            for posting in WritePosting.objects.all()
        ]
        comments = [{

            'id': (comment.postID),
            'name': (comment.userName),
            'content': (comment.content),
            'time': (str(comment.time))
            }
            for comment in BlogComment.objects.all()
        ]
        return render(request, 'posting.html',
        {
            'id': json.dumps(posting_id),
            'postings': json.dumps(postings),
            'comments': json.dumps(comments)
        })

class WriteCommentView(views.View):
    def post(self, request, posting_id):
        receive = request.body.decode('utf8')
        dic = literal_eval(receive)
        BlogComment.objects.create( postID = dic['id'], userName = dic['userName'], content = dic['content'], time = datetime.datetime.now())
        
        comments = [
            {
                'id': (comment.postID),
                'name': (comment.userName),
                'content': (comment.content),
                'time': (str(comment.time))
            }
            for comment in BlogComment.objects.all()
        ]
        return HttpResponse(
            json.dumps({
                'comments': comments
            }),
            content_type='application/json'
        )

class IndexView(views.View):
    def get(self, request):
        return render(request, 'index.html')

class RuletView(views.View):
    def get(self, request):
        records = [
            {
                'name': (record.name),
                'score': (record.score)
            }
            for record in RuletScore.objects.all()
        ]
        return render(request, 'rulet.html',
        {
            'records': json.dumps(records)
        })

class RuletScoreView(views.View):
    def post(self, request):
        receive = request.body.decode('utf8')
        dic = literal_eval(receive)
        RuletScore.objects.create( name = dic['userName'], score = dic['score'] )
        records = [
            {
                'name': (record.name),
                'score': (record.score)
            }
            for record in RuletScore.objects.all()
        ]
        return HttpResponse(
            json.dumps({
                'records' : records
            }),
            content_type='application/json'
        )

class HighAndLowView(views.View):
    def get(self, request):
        records = [
            {
                'name': (record.name),
                'level': (record.level),
                'tryCount': (record.tryCount)
            }
            for record in HighAndLowScore.objects.all()
        ]
        return render(request, 'highandlow.html',
        {'records': json.dumps(records)})

class HighAndLowScoreView(views.View):
    def post(self, request):
        receive = request.body.decode('utf8')
        dic = literal_eval(receive)
        HighAndLowScore.objects.create( name = dic['userName'], level = dic['gameLevel'], tryCount = dic['tryCount'])

        records = [
            {
                'name': (record.name),
                'level': (record.level),
                'tryCount': (record.tryCount)
            }
            for record in HighAndLowScore.objects.all()
        ]
        return HttpResponse(
            json.dumps({
                'records' : records
            }),
            content_type='application/json'
        )

class CounterView(views.View):
    def get(self, request):
        records = [
            {'name': (record.name)}
            for record in CounterScore.objects.all()
        ]
        return render(request, 'counter.html',
        {'records': json.dumps(records)})

class CounterScoreView(views.View):
    def post(self, request):
        receive = request.body.decode('utf8')
        CounterScore.objects.create( name = receive )
        records = [
            {'name': (record.name)}
           for record in CounterScore.objects.all()
        ]
        return HttpResponse(
            json.dumps({
                'records' : records
            }),
            content_type='application/json'
        )

class JirungiView(views.View):
    def get(self, request):
        return render(request, 'jirungi.html')

class AdvencherView(views.View):
    def get(self, request):
        return render(request, 'advencher.html')

