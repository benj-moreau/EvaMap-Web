from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from EvaMap.EvaMap import EvaMap
import json


@require_http_methods(['GET'])
def home(request):
    return render(request, 'home.html')


@require_http_methods(['GET'])
def form(request):
    return render(request, 'form.html')


@csrf_exempt
@require_http_methods(['POST'])
def result(request):
    ontology = request.POST.get('ontology')
    mapping = request.POST.get('mapping')
    dataset = request.POST.get('dataset')
    evamap = EvaMap(ontology, mapping, dataset)
    evamap.evaluate_mapping()
    result = evamap.get_complet_result()
    total_score = evamap.get_total_score()
    sorted_result = sorted(result, key=lambda res: (res['score'], res['name']))
    return render(request, 'result.html', {'total_score': total_score, 'detailed_result': json.dumps(sorted_result)})
