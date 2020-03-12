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
    #result = [{'name': 'Availability', 'score': 1.0, 'metrics': [{'name': 'Availability error', 'feedbacks': [], 'score': 1.0}]}, {'name': 'Clarity', 'score': 0.5, 'metrics': [{'name': 'Human readable URIs', 'feedbacks': [], 'score': 1}, {'name': 'Usage of description or label', 'feedbacks': ['Human readable description of the ressource https://example.org/$(name)-$(home_team) is missing. Please add an rdfs:comment or rdfs:label', 'Human readable description of the ressource https://example.org/$(name)-$(away_team) is missing. Please add an rdfs:comment or rdfs:label', 'Human readable description of the ressource https://example.org/$(home_team)-$(away_team) is missing. Please add an rdfs:comment or rdfs:label', 'Human readable description of the ressource https://example.org/$(name) is missing. Please add an rdfs:comment or rdfs:label'], 'score': 0.0}]}, {'name': 'Conciseness', 'score': 1.0, 'metrics': [{'name': 'Long URIs', 'feedbacks': [], 'score': 1.0}, {'name': 'Duplicated rules', 'feedbacks': [], 'score': 1}]}, {'name': 'Connectability', 'score': 0.5, 'metrics': [{'name': 'Use of sameAs properties', 'feedbacks': ['No sameAs defined'], 'score': 0}, {'name': 'Use of external URIs', 'feedbacks': [], 'score': 1.0}, {'name': 'Use of one global mapping', 'feedbacks': ['resource https://example.org/$(name)-$(home_team) is not linked to another resource', 'resource https://example.org/$(name)-$(away_team) is not linked to another resource', 'resource https://example.org/$(home_team)-$(away_team) is not linked to another resource', 'resource https://example.org/$(name) is not linked to another resource'], 'score': 0.0}, {'name': 'Use of external link', 'feedbacks': [], 'score': 1}]}, {'name': 'Consistency', 'score': 0.5, 'metrics': [{'name': 'Domain and range of properties', 'feedbacks': [], 'score': 1.0}, {'name': 'Correct use of subclasses and properties', 'feedbacks': ['Super class http://dbpedia.org/ontology/Organisation of http://dbpedia.org/ontology/SportsTeam is missing.'], 'score': 0.0}, {'name': 'Usage of equivalent classes and properties', 'feedbacks': ['http://schema.org/SportsTeam equivalent class of http://dbpedia.org/ontology/SportsTeam is missing.'], 'score': 0.0}, {'name': 'Misuse of disjointWith', 'feedbacks': [], 'score': 1.0}]}, {'name': 'Coverability', 'score': 1.0, 'metrics': [{'name': 'Data coverage', 'feedbacks': [], 'score': 1.0}]}]
    evamap.evaluate_mapping()
    result = evamap.get_complet_result()
    total_score = evamap.get_total_score()
    sorted_result = sorted(result, key=lambda res: (res['score'], res['name']))
    return render(request, 'result.html', {'total_score': total_score, 'detailed_result': json.dumps(sorted_result)})
