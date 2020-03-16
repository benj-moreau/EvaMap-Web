var examples = [
    {
        'id': 'football-ligue',
        'dataset': '{\n' +
            '    "nhits": 380,\n' +
            '    "parameters": {\n' +
            '        "dataset": [\n' +
            '            "resultats-ligue-1"\n' +
            '        ],\n' +
            '        "timezone": "UTC",\n' +
            '        "rows": 10,\n' +
            '        "sort": [\n' +
            '            "-name"\n' +
            '        ],\n' +
            '        "format": "json",\n' +
            '        "facet": [\n' +
            '            "name",\n' +
            '            "end_date",\n' +
            '            "start_date",\n' +
            '            "home_team",\n' +
            '            "away_team"\n' +
            '        ]\n' +
            '    },\n' +
            '    "records": [\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "44b9be3a1938c4b51da718f140e18aeaedc30a93",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Paris_SG",\n' +
            '                "away_team": "Amiens_SC",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4809097888cfa3d912a410718cd756531adec1ef",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Angers_SCO",\n' +
            '                "away_team": "FC_Girondins_de_Bordeaux",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "73af9244f8bba09b63913e8bee1c67b05b21a98d",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "LOSC",\n' +
            '                "away_team": "FC_Nantes",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "edeb227d4e82c2a0a7661cf0c95b31ba29e1ad01",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Montpellier_Héraut_SC",\n' +
            '                "away_team": "Stade MalherbeCaen",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "94f0123e33fe7c6fb91de064afcdef78dc98089a",\n' +
            '            "fields": {\n' +
            '                "home_goal": 4,\n' +
            '                "home_team": "Olympique_Lyonnais",\n' +
            '                "away_team": "Racing_Club_Strasbourg_Alsace",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "5c760ff1f43122a85d562846e41e7b8e60c76a30",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                "away_team": "Stade_Rennais_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 1,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "a8c544ca2b6a8f59545573c7df21a0e0d1b07365",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "AS_Monaco",\n' +
            '                "away_team": "Toulouse_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "1f02cadd75c3885ac8d3a0b38a73a48188beda37",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "AS_SaintÉtienne",\n' +
            '                "away_team": "OGC_Nice",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "e7cbc999a3688c34d34bbb5da043f22feb606d24",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Football_Club_Metz",\n' +
            '                "away_team": "En_Avant_de_Guingamp",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 3,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4725e9ff82c6716a46b660bddcac902aac51b1a1",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "Olympique_de_Marseille",\n' +
            '                "away_team": "Dijon_Football_Côte_dOr",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        }\n' +
            '    ],\n' +
            '    "facet_groups": [\n' +
            '        {\n' +
            '            "name": "name",\n' +
            '            "facets": []\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "end_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "start_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "home_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "away_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        }\n' +
            '    ]\n' +
            '}',
        'ontology': '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n' +
            '@prefix owl: <http://www.w3.org/2002/07/owl#> .\n' +
            '@prefix schema: <http://schema.org/> .\n' +
            '@prefix wdrs: <http://www.w3.org/2007/05/powder-s#> .\n' +
            '@prefix prov: <http://www.w3.org/ns/prov#> .\n' +
            '@prefix ns0: <http://open.vocab.org/terms/> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDisciplineOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#TransitiveProperty> , <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a parent discipline, for example rhythmic gymnastics with gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDisciplineOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Home>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The home ground, stadium or location of a Competitive Sporting Organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Home"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to a stage that it contains."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to an enumerated round type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Multi-stage Competition is a competition that is organised as a set of stages. An example is the Football World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiStageCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Ontology> , <http://www.bbc.co.uk/ontologies/provenance/Ontology> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Sport Ontology is a simple lightweight ontology for publishing data about competitive sports events."^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Sport Ontology"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://purl.org/dc/elements/1.1/creator>\n' +
            '              <http://uk.linkedin.com/pub/jem-rayfield/27/b19/757> , <http://uk.linkedin.com/in/paulwilton> , <http://www.blockslabpillar.com> , <http://www.linkedin.com/in/tfgrahame> , <http://uk.linkedin.com/pub/stuart-williams/8/684/351> , <http://uk.linkedin.com/in/brianwmcbride> ;\n' +
            '      <http://purl.org/dc/terms/license>\n' +
            '              <http://creativecommons.org/licenses/by/4.0#id> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/canonicalLocation>\n' +
            '              "https://repo.dev.bbc.co.uk/services/linked-data/ontologies/domain/sport/sport-2.13.ttl"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/changeReason>\n' +
            '              "Making sport:SportingOrganisation subClass core:Organisation. Refining some descriptions."@en-gb ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provided>\n' +
            '              "2015-05-14T08:53:58+00:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provider>\n' +
            '              <mailto:tom.grahame@bbc.co.uk> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/public>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/slug>\n' +
            '              "sport"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/version>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#imports>\n' +
            '              <http://www.bbc.co.uk/ontologies/coreconcepts> , <http://xmlns.com/foaf/0.1/> , <http://www.bbc.co.uk/ontologies/asset/> , <http://purl.org/NET/c4dm/event.owl> , <http://www.bbc.co.uk/ontologies/provenance> ;\n' +
            '      <http://www.w3.org/2002/07/owl#priorVersion>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.1> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionIRI>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.2> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionInfo>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Round>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A round is one or more competitions that is part of a Multi-Round Competition. Examples include the first round of Wimbledon and the final round of the FA Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Round"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competesIn>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitor, team or other agent to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competesIn"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#agent_in> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sporting organisation that participates in competitive sporting events. For example Manchester United or Team GB at the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isRoundOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to its corresponding multi-round competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isRoundOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/relegatesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the previous competition in a heirarchy that teams are relegated to. For example the  Premier League relegates to the nPower Championship."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "relegatesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/promotesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Person>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An athlete or other person with typically a participating role in a CompetitiveSportingOrganisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Person"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Person> , <http://www.bbc.co.uk/ontologies/coreconcepts/Person> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GroupCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation as a collection of leagues used to select the top N competitors from each league."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GroupCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-16>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated competition types, for example: domestic, international."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitionType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/race>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/division>\n' +
            '      a       <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Division relates a DivisionalCompetition to a competition which is a division of that DivisionalCompetition. Used for the olympics"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#seeAlso>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasDivisionList> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Venue>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The location of a sporting event. May be a stadium, track, lake etc."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Venue"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GoverningBody>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Governing Body for a sport, such as The Football Association."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GoverningBody"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-32>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MedalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that results in the awarding of a medal to the winner or runner up in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MedalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a competitor in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isGroupOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a group competition to its corresponding League competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isGroupOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its previous session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its previous stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/semi-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/flagImage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy property used to associate a team with the country flag it represented during the olympics" ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/asset/FlagImage> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The group of people that are available to compete in a particular competition. Two groups with the same members are not necessarily the same group."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Group> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its last unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to a round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a unit competition to its next unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Match>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The smallest unit of sporting competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Match"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to its first stage in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the last session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mixed>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Competition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competitive sporting event that usually appears as an occurrence of a recurring competition, for example the recurring English Football Premier League has a seasonal competition occurrence during 2012/13"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Competition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#Event> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/quarter-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/hosted>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isMatchOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isMatchOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasMatch> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/UnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A unit competition is the unit of competition defined by a competition discipline rules. Examples include a 100m race or Football match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "UnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "General description of the participation of players, drivers, riders etc, in groups and organisations."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingRole"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/vocab/participation/schema#Role> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the last round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that incorporates a number of different sports, such as the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/recurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the recurring instance of that competition, for example the 2012/13 Premier League to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "recurringCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RecurringCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetesForRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy class, used for associating an athlete with the national team they competed for during the Summer Olympics. Deprecated due to improper naming."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetesForRole"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isCompetitiveSportingOrganisationOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitive sporting group to a competitive sporting organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isCompetitiveSportingOrganisationOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Session>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sub-division of a competition, that must be broken up due to the duration of that competition, occurring for example in snooker or cricket."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Session"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a session within that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Divisional Competition is a competition that is divided into a number of competitions. London 2012 is an example of a Divisional Competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "DivisionalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/eventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a gender class instance."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "eventGender"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final-qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation involved in Sport, for example a Football team or the UK Government Department for Culture, Media and Sport."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Organization> , <http://www.bbc.co.uk/ontologies/coreconcepts/Organisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a unit competition in that round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/LeagueCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A League Competition is a hierarchy of competitions or competition within such a hierarchy."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "LeagueCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something, typically a competition, to an enumerated competition type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competitionType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/awayCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the home competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "awayCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a league competition to a corresponding group competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/isGroupOf> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its first unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to its previous unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/promotesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the next competition in a heirarchy that teams are promoted to. For example the nPower Championship promotes to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "promotesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/relegatesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/home-and-home>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its previous round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/practice>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its last stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportsDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The type of discipline a sporting event involves."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportsDiscipline"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its next stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/play-off>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/dateOfBirth>\n' +
            '      a       <http://www.w3.org/2002/07/owl#AnnotationProperty> , <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Implemented because foaf has no notion of date of birth. Deprecated in favour of core:dateOfBirth."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Person> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.11> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "dateOfBirth"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#date> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasMatch>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasMatch"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasDivision>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a divisional competition to a division in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasDivision"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineRecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition the covers many sports, such as the Summer Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineRecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Competition organised as a sequence of rounds, for example the Premier League or group stage of the World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiRoundCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/EventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated type, typically Male, Female or Mixed."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "EventGender"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/KnockoutCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition or stage of competition that progresses through rounds of individual fixtures whereby one team is eliminated as a result of each fixture."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "KnockoutCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a child discipline, for example gymnastics with rhythmic gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDiscipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the first round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isSessionOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isSessionOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasHome>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a Competitive Sporting Organisation to its home ground, stadium or location."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasHome"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Home> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its next round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetedFor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Associates an agent with sporting organisations non-temporally."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetedFor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/homeCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the away competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "homeCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasCompetitor> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its next session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundNumber>\n' +
            '      a       <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Indicates the sequential number of a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundNumber"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#int> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the first session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition such as the Rugby Super League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RoundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated round types, for example: preliminary, qualifying or final."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RoundType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/discipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something to a sporting discipline, for example a person to athletics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "discipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isStageOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage to a multi-stage competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isStageOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-elimination>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/HockeyTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SoccerClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SportsTeam>\n' +
            '  a owl:Class ;\n' +
            '  owl:equivalentClass schema:SportsTeam ;\n' +
            '  rdfs:label "équipe sportive"@fr, "sports team"@en, "Sportmannschaft"@de, "スポーツチーム"@ja, "ομαδικά αθλήματα"@el, "sportteam"@nl ;\n' +
            '  rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '  owl:sameAs <http://dbpedia.org/ontology/SportsTeam> ;\n' +
            '  rdfs:subClassOf <http://dbpedia.org/ontology/Organisation> ;\n' +
            '  wdrs:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '  prov:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:SportsTeam> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/draftTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/team> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/RugbyClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/thirdTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/fastestDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/firstDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/poleDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/secondTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/manager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/managerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/generalManager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AustralianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CanadianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CyclingTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/FormulaOneTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/HandballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SpeedwayTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/amateurTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/leadTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/playerInTeam> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/proTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeaguePromoted> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueRelegated> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueWinner> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/trainerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BasketballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/> ns0:defines <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/data/definitions.ttl> ns0:describes <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachedTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AmericanFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/formerTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/debutTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/club> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BaseballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CricketTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/juniorTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nationalTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/ncaaTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nflTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/oldTeamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/stateOfOriginTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/youthClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .',
        'mapping': 'mappings:\n' +
            '    match:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(home_team)-$(away_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Match\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_home_goal\',$(home_goal),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_away_goal\',$(away_goal),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_awayCompetitor\',$(away_team)]\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_homeCopetitor\',$(home_team)]\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_isMatchOf\',$(name),\'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '    round:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Round\']\n' +
            '        - [\'https://www.bbc.co.uk/ontologies/sport#terms_hasMatch\',$(home_team)-$(away_team))]\n' +
            '        - [\'http://dbpedia.org/ontology/startDate\',$(start_date)]\n' +
            '        - [\'http://dbpedia.org/ontology/endDate\',$(end_date)]\n' +
            '    homeTeam:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)-$(home_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            '    awayTeam:\n' +
            '        source: dataset-source\n' +
            '        subject: https://example.org/$(name)-$(away_team)\n' +
            '        predicateobjects:\n' +
            '        - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            'sources:\n' +
            '    dataset-source: [data.json~jsonpath, \'$.records.[*].fields\']'
    },
    {
        'id': 'football-ligue-fixed',
        'dataset': '{\n' +
            '    "nhits": 380,\n' +
            '    "parameters": {\n' +
            '        "dataset": [\n' +
            '            "resultats-ligue-1"\n' +
            '        ],\n' +
            '        "timezone": "UTC",\n' +
            '        "rows": 10,\n' +
            '        "sort": [\n' +
            '            "-name"\n' +
            '        ],\n' +
            '        "format": "json",\n' +
            '        "facet": [\n' +
            '            "name",\n' +
            '            "end_date",\n' +
            '            "start_date",\n' +
            '            "home_team",\n' +
            '            "away_team"\n' +
            '        ]\n' +
            '    },\n' +
            '    "records": [\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "44b9be3a1938c4b51da718f140e18aeaedc30a93",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Paris_SG",\n' +
            '                "away_team": "Amiens_SC",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4809097888cfa3d912a410718cd756531adec1ef",\n' +
            '            "fields": {\n' +
            '                "home_goal": 2,\n' +
            '                "home_team": "Angers_SCO",\n' +
            '                "away_team": "FC_Girondins_de_Bordeaux",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "73af9244f8bba09b63913e8bee1c67b05b21a98d",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "LOSC",\n' +
            '                "away_team": "FC_Nantes",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "edeb227d4e82c2a0a7661cf0c95b31ba29e1ad01",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Montpellier_Héraut_SC",\n' +
            '                "away_team": "Stade MalherbeCaen",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "94f0123e33fe7c6fb91de064afcdef78dc98089a",\n' +
            '            "fields": {\n' +
            '                "home_goal": 4,\n' +
            '                "home_team": "Olympique_Lyonnais",\n' +
            '                "away_team": "Racing_Club_Strasbourg_Alsace",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "5c760ff1f43122a85d562846e41e7b8e60c76a30",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                "away_team": "Stade_Rennais_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 1,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "a8c544ca2b6a8f59545573c7df21a0e0d1b07365",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "AS_Monaco",\n' +
            '                "away_team": "Toulouse_Football_Club",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 2,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "1f02cadd75c3885ac8d3a0b38a73a48188beda37",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "AS_SaintÉtienne",\n' +
            '                "away_team": "OGC_Nice",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "e7cbc999a3688c34d34bbb5da043f22feb606d24",\n' +
            '            "fields": {\n' +
            '                "home_goal": 1,\n' +
            '                "home_team": "Football_Club_Metz",\n' +
            '                "away_team": "En_Avant_de_Guingamp",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 3,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        },\n' +
            '        {\n' +
            '            "datasetid": "resultats-ligue-1",\n' +
            '            "recordid": "4725e9ff82c6716a46b660bddcac902aac51b1a1",\n' +
            '            "fields": {\n' +
            '                "home_goal": 3,\n' +
            '                "home_team": "Olympique_de_Marseille",\n' +
            '                "away_team": "Dijon_Football_Côte_dOr",\n' +
            '                "name": 1,\n' +
            '                "end_date": "2017-08-06",\n' +
            '                "away_goal": 0,\n' +
            '                "start_date": "2017-08-04"\n' +
            '            }\n' +
            '        }\n' +
            '    ],\n' +
            '    "facet_groups": [\n' +
            '        {\n' +
            '            "name": "name",\n' +
            '            "facets": []\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "end_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "start_date",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "2017",\n' +
            '                    "path": "2017",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "2018",\n' +
            '                    "path": "2018",\n' +
            '                    "count": 190,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "home_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        },\n' +
            '        {\n' +
            '            "name": "away_team",\n' +
            '            "facets": [\n' +
            '                {\n' +
            '                    "name": "AS_Monaco",\n' +
            '                    "path": "AS_Monaco",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "AS_SaintÉtienne",\n' +
            '                    "path": "AS_SaintÉtienne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Amiens_SC",\n' +
            '                    "path": "Amiens_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Angers_SCO",\n' +
            '                    "path": "Angers_SCO",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Dijon_Football_Côte_dOr",\n' +
            '                    "path": "Dijon_Football_Côte_dOr",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "En_Avant_de_Guingamp",\n' +
            '                    "path": "En_Avant_de_Guingamp",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "path": "Espérance_Sportive_Troyes_Aube_Champagne",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Girondins_de_Bordeaux",\n' +
            '                    "path": "FC_Girondins_de_Bordeaux",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "FC_Nantes",\n' +
            '                    "path": "FC_Nantes",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Football_Club_de_Metz",\n' +
            '                    "path": "Football_Club_de_Metz",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "LOSC",\n' +
            '                    "path": "LOSC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Montpellier_Héraut_SC",\n' +
            '                    "path": "Montpellier_Héraut_SC",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "OGC_Nice",\n' +
            '                    "path": "OGC_Nice",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_Lyonnais",\n' +
            '                    "path": "Olympique_Lyonnais",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Olympique_de_Marseille",\n' +
            '                    "path": "Olympique_de_Marseille",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Paris_SG",\n' +
            '                    "path": "Paris_SG",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "path": "Racing_Club_Strasbourg_Alsace",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Malherbe_Caen",\n' +
            '                    "path": "Stade_Malherbe_Caen",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Stade_Rennais_Football_Club",\n' +
            '                    "path": "Stade_Rennais_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                },\n' +
            '                {\n' +
            '                    "name": "Toulouse_Football_Club",\n' +
            '                    "path": "Toulouse_Football_Club",\n' +
            '                    "count": 19,\n' +
            '                    "state": "displayed"\n' +
            '                }\n' +
            '            ]\n' +
            '        }\n' +
            '    ]\n' +
            '}',
        'ontology': '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n' +
            '@prefix owl: <http://www.w3.org/2002/07/owl#> .\n' +
            '@prefix schema: <http://schema.org/> .\n' +
            '@prefix wdrs: <http://www.w3.org/2007/05/powder-s#> .\n' +
            '@prefix prov: <http://www.w3.org/ns/prov#> .\n' +
            '@prefix ns0: <http://open.vocab.org/terms/> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDisciplineOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#TransitiveProperty> , <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a parent discipline, for example rhythmic gymnastics with gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDisciplineOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Home>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The home ground, stadium or location of a Competitive Sporting Organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Home"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to a stage that it contains."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to an enumerated round type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Multi-stage Competition is a competition that is organised as a set of stages. An example is the Football World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiStageCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Ontology> , <http://www.bbc.co.uk/ontologies/provenance/Ontology> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Sport Ontology is a simple lightweight ontology for publishing data about competitive sports events."^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Sport Ontology"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://purl.org/dc/elements/1.1/creator>\n' +
            '              <http://uk.linkedin.com/pub/jem-rayfield/27/b19/757> , <http://uk.linkedin.com/in/paulwilton> , <http://www.blockslabpillar.com> , <http://www.linkedin.com/in/tfgrahame> , <http://uk.linkedin.com/pub/stuart-williams/8/684/351> , <http://uk.linkedin.com/in/brianwmcbride> ;\n' +
            '      <http://purl.org/dc/terms/license>\n' +
            '              <http://creativecommons.org/licenses/by/4.0#id> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/canonicalLocation>\n' +
            '              "https://repo.dev.bbc.co.uk/services/linked-data/ontologies/domain/sport/sport-2.13.ttl"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/changeReason>\n' +
            '              "Making sport:SportingOrganisation subClass core:Organisation. Refining some descriptions."@en-gb ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provided>\n' +
            '              "2015-05-14T08:53:58+00:00"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/provider>\n' +
            '              <mailto:tom.grahame@bbc.co.uk> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/public>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/slug>\n' +
            '              "sport"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.bbc.co.uk/ontologies/provenance/version>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#imports>\n' +
            '              <http://www.bbc.co.uk/ontologies/coreconcepts> , <http://xmlns.com/foaf/0.1/> , <http://www.bbc.co.uk/ontologies/asset/> , <http://purl.org/NET/c4dm/event.owl> , <http://www.bbc.co.uk/ontologies/provenance> ;\n' +
            '      <http://www.w3.org/2002/07/owl#priorVersion>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.1> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionIRI>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/3.2> ;\n' +
            '      <http://www.w3.org/2002/07/owl#versionInfo>\n' +
            '              "3.2"^^<http://www.w3.org/2001/XMLSchema#string> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Round>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A round is one or more competitions that is part of a Multi-Round Competition. Examples include the first round of Wimbledon and the final round of the FA Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Round"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competesIn>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitor, team or other agent to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competesIn"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#agent_in> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sporting organisation that participates in competitive sporting events. For example Manchester United or Team GB at the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isRoundOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to its corresponding multi-round competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isRoundOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/relegatesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the previous competition in a heirarchy that teams are relegated to. For example the  Premier League relegates to the nPower Championship."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "relegatesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/promotesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Person>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An athlete or other person with typically a participating role in a CompetitiveSportingOrganisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Person"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Person> , <http://www.bbc.co.uk/ontologies/coreconcepts/Person> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GroupCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation as a collection of leagues used to select the top N competitors from each league."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GroupCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-16>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated competition types, for example: domestic, international."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitionType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/race>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/division>\n' +
            '      a       <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Division relates a DivisionalCompetition to a competition which is a division of that DivisionalCompetition. Used for the olympics"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#seeAlso>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasDivisionList> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Venue>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The location of a sporting event. May be a stadium, track, lake etc."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Venue"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/GoverningBody>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The Governing Body for a sport, such as The Football Association."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "GoverningBody"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/round-of-32>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MedalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that results in the awarding of a medal to the winner or runner up in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MedalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a competitor in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isGroupOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a group competition to its corresponding League competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isGroupOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its previous session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its previous stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/semi-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/flagImage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy property used to associate a team with the country flag it represented during the olympics" ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/asset/FlagImage> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The group of people that are available to compete in a particular competition. Two groups with the same members are not necessarily the same group."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Group> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its last unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to a round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a unit competition to its next unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Match>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The smallest unit of sporting competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Match"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-stage competition to its first stage in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the last session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mixed>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Competition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competitive sporting event that usually appears as an occurrence of a recurring competition, for example the recurring English Football Premier League has a seasonal competition occurrence during 2012/13"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Competition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/NET/c4dm/event.owl#Event> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/quarter-final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/hosted>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isMatchOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isMatchOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasMatch> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/UnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A unit competition is the unit of competition defined by a competition discipline rules. Examples include a 100m race or Football match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "UnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "General description of the participation of players, drivers, riders etc, in groups and organisations."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetitiveSportingRole"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://purl.org/vocab/participation/schema#Role> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the last round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/european-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-league>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition that incorporates a number of different sports, such as the Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/recurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the recurring instance of that competition, for example the 2012/13 Premier League to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "recurringCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/RecurringCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/CompetesForRole>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Legacy class, used for associating an athlete with the national team they competed for during the Summer Olympics. Deprecated due to improper naming."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.0> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "CompetesForRole"^^<http://www.w3.org/2001/XMLSchema#string> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isCompetitiveSportingOrganisationOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competitive sporting group to a competitive sporting organisation."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isCompetitiveSportingOrganisationOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingGroup> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/Session>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A sub-division of a competition, that must be broken up due to the duration of that competition, occurring for example in snooker or cricket."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "Session"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a session within that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Divisional Competition is a competition that is divided into a number of competitions. London 2012 is an example of a Divisional Competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "DivisionalCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/eventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to a gender class instance."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "eventGender"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/final-qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportingOrganisation>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "An organisation involved in Sport, for example a Football team or the UK Government Department for Culture, Media and Sport."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportingOrganisation"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://xmlns.com/foaf/0.1/Organization> , <http://www.bbc.co.uk/ontologies/coreconcepts/Organisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/club-cup>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a unit competition in that round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/qualifying>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/LeagueCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A League Competition is a hierarchy of competitions or competition within such a hierarchy."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "LeagueCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/domestic-cup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/competitionType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something, typically a competition, to an enumerated competition type."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "competitionType"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/awayCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the home competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "awayCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasGroup>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a league competition to a corresponding group competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/LeagueCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasGroup"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/GroupCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/isGroupOf> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to its first unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevUnitCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to its previous unit competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevUnitCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/UnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/promotesTo>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the next competition in a heirarchy that teams are promoted to. For example the nPower Championship promotes to the Premier League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "promotesTo"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/relegatesTo> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/home-and-home>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/prevRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its previous round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "prevRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/practice>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/lastStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its last stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "lastStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/event-gender/mens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/EventGender> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/SportsDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "The type of discipline a sporting event involves."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "SportsDiscipline"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextStage>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage in a multi-stage competition to its next stage."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextStage"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/play-off>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/dateOfBirth>\n' +
            '      a       <http://www.w3.org/2002/07/owl#AnnotationProperty> , <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Implemented because foaf has no notion of date of birth. Deprecated in favour of core:dateOfBirth."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Person> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/2.11> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "dateOfBirth"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#date> ;\n' +
            '      <http://www.w3.org/2002/07/owl#deprecated>\n' +
            '              "true"^^<http://www.w3.org/2001/XMLSchema#boolean> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasMatch>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round to a match."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasMatch"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasUnitCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasDivision>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a divisional competition to a division in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/DivisionalCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasDivision"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiDisciplineRecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition the covers many sports, such as the Summer Olympics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiDisciplineRecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A Competition organised as a sequence of rounds, for example the Premier League or group stage of the World Cup."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "MultiRoundCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/EventGender>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated type, typically Male, Female or Mixed."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "EventGender"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/KnockoutCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A competition or stage of competition that progresses through rounds of individual fixtures whereby one team is eliminated as a result of each fixture."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "KnockoutCompetition"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subClassOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/subDiscipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a discipline with a child discipline, for example gymnastics with rhythmic gymnastics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "subDiscipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a multi-round competition to the first round in that competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiRoundCompetition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasRound> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isSessionOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to a competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isSessionOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasHome>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a Competitive Sporting Organisation to its home ground, stadium or location."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/CompetitiveSportingOrganisation> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasHome"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Home> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextRound>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a round in a multi-round competition to its next round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextRound"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-group>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/hasCompetedFor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Associates an agent with sporting organisations non-temporally."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "hasCompetedFor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportingOrganisation> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/homeCompetitor>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a match to one competitor, by definition or designation not the away competitor."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Match> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "homeCompetitor"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://xmlns.com/foaf/0.1/Agent> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasCompetitor> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/nextSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a session to its next session."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "nextSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/roundNumber>\n' +
            '      a       <http://www.w3.org/2002/07/owl#DatatypeProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Indicates the sequential number of a round."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Round> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "roundNumber"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.w3.org/2001/XMLSchema#int> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/firstSession>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a competition to the first session of a series of sessions."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "firstSession"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Session> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#subPropertyOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasSession> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/competition-types/international-groupcup-womens>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/CompetitionType> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RecurringCompetition>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "A recurring sports competition such as the Rugby Super League."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RecurringCompetition"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/RoundType>\n' +
            '      a       <http://www.w3.org/2002/07/owl#Class> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Enumerated round types, for example: preliminary, qualifying or final."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "RoundType"@en-gb .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/discipline>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates something to a sporting discipline, for example a person to athletics."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "discipline"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/SportsDiscipline> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/ontologies/sport/isStageOf>\n' +
            '      a       <http://www.w3.org/2002/07/owl#ObjectProperty> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#comment>\n' +
            '              "Relates a stage to a multi-stage competition."@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#domain>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/Competition> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport> ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#label>\n' +
            '              "isStageOf"@en-gb ;\n' +
            '      <http://www.w3.org/2000/01/rdf-schema#range>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/MultiStageCompetition> ;\n' +
            '      <http://www.w3.org/2002/07/owl#inverseOf>\n' +
            '              <http://www.bbc.co.uk/ontologies/sport/hasStage> .\n' +
            '\n' +
            '<http://www.bbc.co.uk/things/round-types/single-elimination>\n' +
            '      a       <http://www.bbc.co.uk/ontologies/sport/RoundType> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/HockeyTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SoccerClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SportsTeam>\n' +
            '  a owl:Class ;\n' +
            '  owl:equivalentClass schema:SportsTeam ;\n' +
            '  rdfs:label "équipe sportive"@fr, "sports team"@en, "Sportmannschaft"@de, "スポーツチーム"@ja, "ομαδικά αθλήματα"@el, "sportteam"@nl ;\n' +
            '  rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '  owl:sameAs <http://dbpedia.org/ontology/SportsTeam> ;\n' +
            '  rdfs:subClassOf <http://dbpedia.org/ontology/Organisation> ;\n' +
            '  wdrs:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '  prov:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:SportsTeam> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/draftTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/team> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/RugbyClub> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/thirdTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/fastestDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/firstDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/poleDriverTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/secondTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/manager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/managerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/generalManager> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AustralianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CanadianFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CyclingTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/FormulaOneTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/HandballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/SpeedwayTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/amateurTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeamMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/leadTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/playerInTeam> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/proTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeaguePromoted> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueRelegated> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/soccerLeagueWinner> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamManager> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/trainerClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BasketballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/> ns0:defines <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/data/definitions.ttl> ns0:describes <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachedTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/AmericanFootballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/formerTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/debutTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/club> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/BaseballTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/CricketTeam> rdfs:subClassOf <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/coachClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/juniorTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nationalTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/ncaaTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/nflTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/oldTeamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/stateOfOriginTeam> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/teamCoached> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/youthClub> rdfs:range <http://dbpedia.org/ontology/SportsTeam> .\n' +
            '<http://dbpedia.org/ontology/currentMember> rdfs:domain <http://dbpedia.org/ontology/SportsTeam> .',
        'mapping': 'mappings:\n' +
            '  awayTeam:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/Organisation\']\n' +
            '      - [a, \'http://schema.org/SportsTeam\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(away_team)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/resultats-ligue-1@public/SoccerTeam/$(away_team)/\n' +
            '  homeTeam:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://dbpedia.org/ontology/SportsTeam\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/Organisation\']\n' +
            '      - [a, \'http://schema.org/SportsTeam\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(home_team)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/resultats-ligue-1@public/SoccerTeam/$(home_team)/\n' +
            '  match:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Match\']\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_home_goal\', $(home_goal), \'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_away_goal\', $(away_goal), \'http://www.w3.org/2001/XMLSchema#integer\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(home_team)-$(away_team)-$(start_date)-day$(name)]\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_awayCompetitor\', awayTeam]\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_homeCopetitor\', homeTeam]\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_isMatchOf\', round]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/resultats-ligue-1@public/SoccerMatch/$(home_team)-$(away_team)-$(start_date)/\n' +
            '  round:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'https://www.bbc.co.uk/ontologies/sport#terms_Round\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', Ligue1 day $(name) $(start_date)-$(end_date)]\n' +
            '      - [\'https://www.bbc.co.uk/ontologies/sport#terms_hasMatch\', match]\n' +
            '      - [\'http://dbpedia.org/ontology/startDate\', $(start_date), \'http://www.w3.org/2001/XMLSchema#date\']\n' +
            '      - [\'http://dbpedia.org/ontology/endDate\', $(end_date), \'http://www.w3.org/2001/XMLSchema#date\']\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/resultats-ligue-1@public/LigueDay/$(name)-$(start_date)/\n' +
            'sources:\n' +
            '  dataset-source: [resultats-ligue-1@public.json~jsonpath, \'$.records.[*].fields\']'
    },
    {
        'id': 'chocolate-bars',
        'dataset': '{"nhits": 1708, "parameters": {"dataset": ["chocolate-bars@public"], "timezone": "UTC", "rows": 10, "format": "json", "facet": ["company", "name", "cocoa_percent", "company_location", "broad_bean_origin", "bean_type"]}, "records": [{"datasetid": "chocolate-bars@public", "recordid": "01256e18e93b40a34d276fc71945926680d9e72d", "fields": {"rating": 2.75, "review_date": "2013", "name": "Panama", "cocoa_percent": 70, "company": "A. Morin", "company_location": "France", "broad_bean_origin": "Panama", "ref": "1011"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "4b53e4d2eddd806000268ba10e05d13638afc457", "fields": {"rating": 4.0, "review_date": "2013", "name": "Chuao", "cocoa_percent": 70, "company": "A. Morin", "bean_type": "Trinitario", "company_location": "France", "broad_bean_origin": "Venezuela", "ref": "1015"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "8f51e533c61eb32cfd7ab91b4ec186983650b42c", "fields": {"rating": 3.75, "review_date": "2015", "name": "Tumbes, Norandino", "cocoa_percent": 70, "company": "Acalli", "bean_type": "Criollo", "company_location": "U.S.A.", "broad_bean_origin": "Peru", "ref": "1470"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "147a73bf6f12d271deeaa308e2736734bb392754", "fields": {"rating": 2.5, "review_date": "2013", "name": "Chuao", "cocoa_percent": 75, "company": "Alain Ducasse", "bean_type": "Trinitario", "company_location": "France", "broad_bean_origin": "Venezuela", "ref": "1061"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "11e06f065a769d0a7755590604c069657a8576af", "fields": {"rating": 2.75, "review_date": "2016", "name": "Momotombo", "cocoa_percent": 60, "company": "Altus aka Cao Artisan", "company_location": "U.S.A.", "broad_bean_origin": "Nicaragua", "ref": "1728"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "9d379bcb937a908aec88447128803a3840fa9805", "fields": {"rating": 4.0, "review_date": "2011", "name": "Morobe", "cocoa_percent": 70, "company": "Amano", "company_location": "U.S.A.", "broad_bean_origin": "Papua New Guinea", "ref": "725"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "d5488d4dc24897809a5157ad195ea6bdd3ad4f5d", "fields": {"rating": 3.0, "review_date": "2010", "name": "Chuao", "cocoa_percent": 70, "company": "Amano", "bean_type": "Trinitario", "company_location": "U.S.A.", "broad_bean_origin": "Venezuela", "ref": "544"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "647db875ca2e8ad3c4de310d26bad525b3aea135", "fields": {"rating": 3.0, "review_date": "2009", "name": "Madagascar", "cocoa_percent": 80, "company": "Artisan du Chocolat", "bean_type": "Criollo, Trinitario", "company_location": "U.K.", "broad_bean_origin": "Madagascar", "ref": "363"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "84189c682b00cf9e3f9aefe1e3e600822174883e", "fields": {"rating": 2.75, "review_date": "2015", "name": "Bambamarca, 2015", "cocoa_percent": 70, "company": "Bakau", "company_location": "Peru", "broad_bean_origin": "Peru", "ref": "1454"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}, {"datasetid": "chocolate-bars@public", "recordid": "8cb7e39065690b75b48440fe4fc2e38f9b79a20c", "fields": {"rating": 3.5, "review_date": "2011", "name": "Indigena Amazonia, Grand Cru, Quizas", "cocoa_percent": 72, "company": "Beschle (Felchlin)", "company_location": "Switzerland", "broad_bean_origin": "Venezuela", "ref": "636"}, "record_timestamp": "2016-12-20T16:57:04.946000+00:00"}], "facet_groups": [{"facets": [{"count": 55, "path": "Madagascar", "state": "displayed", "name": "Madagascar"}, {"count": 43, "path": "Peru", "state": "displayed", "name": "Peru"}, {"count": 39, "path": "Ecuador", "state": "displayed", "name": "Ecuador"}, {"count": 35, "path": "Dominican Republic", "state": "displayed", "name": "Dominican Republic"}, {"count": 20, "path": "Venezuela", "state": "displayed", "name": "Venezuela"}, {"count": 19, "path": "Chuao", "state": "displayed", "name": "Chuao"}, {"count": 19, "path": "Sambirano", "state": "displayed", "name": "Sambirano"}, {"count": 17, "path": "Ocumare", "state": "displayed", "name": "Ocumare"}, {"count": 15, "path": "Ghana", "state": "displayed", "name": "Ghana"}, {"count": 14, "path": "Papua New Guinea", "state": "displayed", "name": "Papua New Guinea"}, {"count": 13, "path": "Belize", "state": "displayed", "name": "Belize"}, {"count": 12, "path": "Bolivia", "state": "displayed", "name": "Bolivia"}, {"count": 11, "path": "Costa Rica", "state": "displayed", "name": "Costa Rica"}, {"count": 11, "path": "Grenada", "state": "displayed", "name": "Grenada"}, {"count": 11, "path": "La Red", "state": "displayed", "name": "La Red"}, {"count": 11, "path": "Tanzania", "state": "displayed", "name": "Tanzania"}, {"count": 11, "path": "Trinidad", "state": "displayed", "name": "Trinidad"}, {"count": 10, "path": "Brazil", "state": "displayed", "name": "Brazil"}, {"count": 10, "path": "Carenero Superior", "state": "displayed", "name": "Carenero Superior"}, {"count": 10, "path": "Conacado", "state": "displayed", "name": "Conacado"}, {"count": 10, "path": "Manabi", "state": "displayed", "name": "Manabi"}, {"count": 10, "path": "Maya Mountain", "state": "displayed", "name": "Maya Mountain"}, {"count": 10, "path": "Porcelana", "state": "displayed", "name": "Porcelana"}, {"count": 9, "path": "Nicaragua", "state": "displayed", "name": "Nicaragua"}, {"count": 8, "path": "Alto Beni", "state": "displayed", "name": "Alto Beni"}, {"count": 8, "path": "Hispaniola", "state": "displayed", "name": "Hispaniola"}, {"count": 8, "path": "Jamaica", "state": "displayed", "name": "Jamaica"}, {"count": 7, "path": "Arriba", "state": "displayed", "name": "Arriba"}, {"count": 7, "path": "Camino Verde P., Balao, Guayas", "state": "displayed", "name": "Camino Verde P., Balao, Guayas"}, {"count": 7, "path": "Esmeraldas", "state": "displayed", "name": "Esmeraldas"}, {"count": 7, "path": "Patanemo", "state": "displayed", "name": "Patanemo"}, {"count": 7, "path": "San Martin", "state": "displayed", "name": "San Martin"}, {"count": 6, "path": "Cuba", "state": "displayed", "name": "Cuba"}, {"count": 6, "path": "Cuyagua", "state": "displayed", "name": "Cuyagua"}, {"count": 6, "path": "Gran Couva", "state": "displayed", "name": "Gran Couva"}, {"count": 6, "path": "Kokoa Kamili", "state": "displayed", "name": "Kokoa Kamili"}, {"count": 6, "path": "Los Rios", "state": "displayed", "name": "Los Rios"}, {"count": 6, "path": "Oko Caribe", "state": "displayed", "name": "Oko Caribe"}, {"count": 6, "path": "Piura", "state": "displayed", "name": "Piura"}, {"count": 6, "path": "Sur del Lago", "state": "displayed", "name": "Sur del Lago"}, {"count": 6, "path": "Uganda", "state": "displayed", "name": "Uganda"}, {"count": 5, "path": "Amazonas", "state": "displayed", "name": "Amazonas"}, {"count": 5, "path": "Bahia", "state": "displayed", "name": "Bahia"}, {"count": 5, "path": "Camino Verde", "state": "displayed", "name": "Camino Verde"}, {"count": 5, "path": "Elvesia P.", "state": "displayed", "name": "Elvesia P."}, {"count": 5, "path": "Equateur", "state": "displayed", "name": "Equateur"}, {"count": 5, "path": "Guatemala", "state": "displayed", "name": "Guatemala"}, {"count": 5, "path": "Puerto Rico", "state": "displayed", "name": "Puerto Rico"}, {"count": 5, "path": "Rio Caribe", "state": "displayed", "name": "Rio Caribe"}, {"count": 5, "path": "Santo Domingo", "state": "displayed", "name": "Santo Domingo"}, {"count": 5, "path": "Tumbes", "state": "displayed", "name": "Tumbes"}, {"count": 4, "path": "Ben Tre", "state": "displayed", "name": "Ben Tre"}, {"count": 4, "path": "Blend", "state": "displayed", "name": "Blend"}, {"count": 4, "path": "Dark", "state": "displayed", "name": "Dark"}, {"count": 4, "path": "Elvesia", "state": "displayed", "name": "Elvesia"}, {"count": 4, "path": "Honduras", "state": "displayed", "name": "Honduras"}, {"count": 4, "path": "Ivory Coast", "state": "displayed", "name": "Ivory Coast"}, {"count": 4, "path": "Kakao Kamili, Kilombero Valley", "state": "displayed", "name": "Kakao Kamili, Kilombero Valley"}, {"count": 4, "path": "La Dalia", "state": "displayed", "name": "La Dalia"}, {"count": 4, "path": "Monte Alegre, 3 diff. plantations", "state": "displayed", "name": "Monte Alegre, 3 diff. plantations"}, {"count": 4, "path": "Raw", "state": "displayed", "name": "Raw"}, {"count": 4, "path": "Rizek Cacao, Domin. Rep.", "state": "displayed", "name": "Rizek Cacao, Domin. Rep."}, {"count": 4, "path": "Tumaco", "state": "displayed", "name": "Tumaco"}, {"count": 4, "path": "Vanuatu", "state": "displayed", "name": "Vanuatu"}, {"count": 4, "path": "Vietnam", "state": "displayed", "name": "Vietnam"}, {"count": 3, "path": "Africa", "state": "displayed", "name": "Africa"}, {"count": 3, "path": "AgroCriso Plantation", "state": "displayed", "name": "AgroCriso Plantation"}, {"count": 3, "path": "Akesson\'s Estate", "state": "displayed", "name": "Akesson\'s Estate"}, {"count": 3, "path": "Arauca", "state": "displayed", "name": "Arauca"}, {"count": 3, "path": "Baracoa", "state": "displayed", "name": "Baracoa"}, {"count": 3, "path": "Colombia", "state": "displayed", "name": "Colombia"}, {"count": 3, "path": "Haiti", "state": "displayed", "name": "Haiti"}, {"count": 3, "path": "Houseblend", "state": "displayed", "name": "Houseblend"}, {"count": 3, "path": "Java", "state": "displayed", "name": "Java"}, {"count": 3, "path": "Johe", "state": "displayed", "name": "Johe"}, {"count": 3, "path": "La Tronca, Matagalpa", "state": "displayed", "name": "La Tronca, Matagalpa"}, {"count": 3, "path": "Lam Dong", "state": "displayed", "name": "Lam Dong"}, {"count": 3, "path": "Las Acacias E.", "state": "displayed", "name": "Las Acacias E."}, {"count": 3, "path": "Los Rios, Rancho Grande 2004/2007", "state": "displayed", "name": "Los Rios, Rancho Grande 2004/2007"}, {"count": 3, "path": "Los Ujuxtes", "state": "displayed", "name": "Los Ujuxtes"}, {"count": 3, "path": "Maranon Canyon", "state": "displayed", "name": "Maranon Canyon"}, {"count": 3, "path": "Maranon Canyon, Fortunato No. 4", "state": "displayed", "name": "Maranon Canyon, Fortunato No. 4"}, {"count": 3, "path": "Matagalpa", "state": "displayed", "name": "Matagalpa"}, {"count": 3, "path": "Mindo", "state": "displayed", "name": "Mindo"}, {"count": 3, "path": "Panama", "state": "displayed", "name": "Panama"}, {"count": 3, "path": "Porcelana, Apotequil", "state": "displayed", "name": "Porcelana, Apotequil"}, {"count": 3, "path": "Puerto Plata", "state": "displayed", "name": "Puerto Plata"}, {"count": 3, "path": "Samar, East Visayas region", "state": "displayed", "name": "Samar, East Visayas region"}, {"count": 3, "path": "Sambirano Valley", "state": "displayed", "name": "Sambirano Valley"}, {"count": 3, "path": "San Juan Estate", "state": "displayed", "name": "San Juan Estate"}, {"count": 3, "path": "San Juan Estate, Gran Couva", "state": "displayed", "name": "San Juan Estate, Gran Couva"}, {"count": 3, "path": "Sao Tome", "state": "displayed", "name": "Sao Tome"}, {"count": 3, "path": "Somia Plantation, 2012", "state": "displayed", "name": "Somia Plantation, 2012"}, {"count": 3, "path": "Tabasco", "state": "displayed", "name": "Tabasco"}, {"count": 3, "path": "Terreiro Velho P.", "state": "displayed", "name": "Terreiro Velho P."}, {"count": 3, "path": "Tien Giang", "state": "displayed", "name": "Tien Giang"}, {"count": 3, "path": "Toscano Black", "state": "displayed", "name": "Toscano Black"}, {"count": 3, "path": "Trinite", "state": "displayed", "name": "Trinite"}, {"count": 3, "path": "West Africa", "state": "displayed", "name": "West Africa"}, {"count": 3, "path": "Xoconusco", "state": "displayed", "name": "Xoconusco"}, {"count": 2, "path": "\\"heirloom\\", Arriba Nacional", "state": "displayed", "name": "\\"heirloom\\", Arriba Nacional"}, {"count": 2, "path": "Akesson Estate", "state": "displayed", "name": "Akesson Estate"}, {"count": 2, "path": "Akesson P.", "state": "displayed", "name": "Akesson P."}, {"count": 2, "path": "Akesson\'s E., Sambirano V.", "state": "displayed", "name": "Akesson\'s E., Sambirano V."}, {"count": 2, "path": "Bachelor\'s Hall E., St. Thomas Parish", "state": "displayed", "name": "Bachelor\'s Hall E., St. Thomas Parish"}, {"count": 2, "path": "Bali, Singaraja", "state": "displayed", "name": "Bali, Singaraja"}, {"count": 2, "path": "Belize south", "state": "displayed", "name": "Belize south"}, {"count": 2, "path": "Blend No. 1", "state": "displayed", "name": "Blend No. 1"}, {"count": 2, "path": "Bolivian", "state": "displayed", "name": "Bolivian"}, {"count": 2, "path": "Brazilian", "state": "displayed", "name": "Brazilian"}, {"count": 2, "path": "Cacao Nacional W.F.", "state": "displayed", "name": "Cacao Nacional W.F."}, {"count": 2, "path": "Camino Verde P., Balao, Guayas, 2014", "state": "displayed", "name": "Camino Verde P., Balao, Guayas, 2014"}, {"count": 2, "path": "Carribean", "state": "displayed", "name": "Carribean"}, {"count": 2, "path": "Carribean-Raw", "state": "displayed", "name": "Carribean-Raw"}, {"count": 2, "path": "Catongo", "state": "displayed", "name": "Catongo"}, {"count": 2, "path": "Chanchamayo Province", "state": "displayed", "name": "Chanchamayo Province"}, {"count": 2, "path": "Chiapas", "state": "displayed", "name": "Chiapas"}, {"count": 2, "path": "Chiapas, Lacandon Jungle, Oaxacom Mtn", "state": "displayed", "name": "Chiapas, Lacandon Jungle, Oaxacom Mtn"}, {"count": 2, "path": "Choroni", "state": "displayed", "name": "Choroni"}, {"count": 2, "path": "Chuao, Aragua region", "state": "displayed", "name": "Chuao, Aragua region"}, {"count": 2, "path": "Chuno", "state": "displayed", "name": "Chuno"}, {"count": 2, "path": "Chuno, Xoco", "state": "displayed", "name": "Chuno, Xoco"}, {"count": 2, "path": "Colombian", "state": "displayed", "name": "Colombian"}, {"count": 2, "path": "Colombie", "state": "displayed", "name": "Colombie"}, {"count": 2, "path": "Conacado Coop", "state": "displayed", "name": "Conacado Coop"}, {"count": 2, "path": "Congo", "state": "displayed", "name": "Congo"}, {"count": 2, "path": "Costa Rica, Oscuro", "state": "displayed", "name": "Costa Rica, Oscuro"}, {"count": 2, "path": "Don Homero- Cerecita Valley", "state": "displayed", "name": "Don Homero- Cerecita Valley"}, {"count": 2, "path": "El Oro", "state": "displayed", "name": "El Oro"}, {"count": 2, "path": "El Oro, Hacienda de Oro", "state": "displayed", "name": "El Oro, Hacienda de Oro"}, {"count": 2, "path": "El Salvador", "state": "displayed", "name": "El Salvador"}, {"count": 2, "path": "Emerald Estate", "state": "displayed", "name": "Emerald Estate"}, {"count": 2, "path": "Espada", "state": "displayed", "name": "Espada"}, {"count": 2, "path": "Fazenda Camboa", "state": "displayed", "name": "Fazenda Camboa"}, {"count": 2, "path": "Guantupi River", "state": "displayed", "name": "Guantupi River"}, {"count": 2, "path": "Haleiwa E, O\'ahu, 2014", "state": "displayed", "name": "Haleiwa E, O\'ahu, 2014"}, {"count": 2, "path": "Jamaique", "state": "displayed", "name": "Jamaique"}, {"count": 2, "path": "Kerala State", "state": "displayed", "name": "Kerala State"}, {"count": 2, "path": "Lachua", "state": "displayed", "name": "Lachua"}, {"count": 2, "path": "Los Llanos", "state": "displayed", "name": "Los Llanos"}, {"count": 2, "path": "Los Rios, H. Iara", "state": "displayed", "name": "Los Rios, H. Iara"}, {"count": 2, "path": "Los Rios, Quevedo, Arriba", "state": "displayed", "name": "Los Rios, Quevedo, Arriba"}, {"count": 2, "path": "Macondo", "state": "displayed", "name": "Macondo"}, {"count": 2, "path": "Madagascar w/ nibs", "state": "displayed", "name": "Madagascar w/ nibs"}, {"count": 2, "path": "Madagascar, w/ shell", "state": "displayed", "name": "Madagascar, w/ shell"}, {"count": 2, "path": "Maranon", "state": "displayed", "name": "Maranon"}, {"count": 2, "path": "Maranon, Cajamarca", "state": "displayed", "name": "Maranon, Cajamarca"}, {"count": 2, "path": "Maranon, Fortunato No. 4", "state": "displayed", "name": "Maranon, Fortunato No. 4"}, {"count": 2, "path": "Markham Valley", "state": "displayed", "name": "Markham Valley"}, {"count": 2, "path": "Moho Valley", "state": "displayed", "name": "Moho Valley"}, {"count": 2, "path": "Momotombo", "state": "displayed", "name": "Momotombo"}, {"count": 2, "path": "Nacional", "state": "displayed", "name": "Nacional"}, {"count": 2, "path": "Nicaliso, Xoco", "state": "displayed", "name": "Nicaliso, Xoco"}, {"count": 2, "path": "Noir", "state": "displayed", "name": "Noir"}, {"count": 2, "path": "O\'ahu, N. Shore, Waialua Estate", "state": "displayed", "name": "O\'ahu, N. Shore, Waialua Estate"}, {"count": 2, "path": "Orinoco", "state": "displayed", "name": "Orinoco"}, {"count": 2, "path": "Oscuro", "state": "displayed", "name": "Oscuro"}, {"count": 2, "path": "Palo Blanco, Chulucanas", "state": "displayed", "name": "Palo Blanco, Chulucanas"}, {"count": 2, "path": "Palos Blancos", "state": "displayed", "name": "Palos Blancos"}, {"count": 2, "path": "Papua", "state": "displayed", "name": "Papua"}, {"count": 2, "path": "Pisa", "state": "displayed", "name": "Pisa"}, {"count": 2, "path": "Porcelana, Venezuela", "state": "displayed", "name": "Porcelana, Venezuela"}, {"count": 2, "path": "Principe", "state": "displayed", "name": "Principe"}, {"count": 2, "path": "Puerto Cabello", "state": "displayed", "name": "Puerto Cabello"}, {"count": 2, "path": "ROIG", "state": "displayed", "name": "ROIG"}, {"count": 2, "path": "Rugoso", "state": "displayed", "name": "Rugoso"}, {"count": 2, "path": "San Andres", "state": "displayed", "name": "San Andres"}, {"count": 2, "path": "San Jose", "state": "displayed", "name": "San Jose"}, {"count": 2, "path": "Sang Yum Coop", "state": "displayed", "name": "Sang Yum Coop"}, {"count": 2, "path": "Semisweet", "state": "displayed", "name": "Semisweet"}, {"count": 2, "path": "Sierra Nevada", "state": "displayed", "name": "Sierra Nevada"}, {"count": 2, "path": "Signature Blend", "state": "displayed", "name": "Signature Blend"}, {"count": 2, "path": "South America", "state": "displayed", "name": "South America"}, {"count": 2, "path": "Trinidad & Tobago", "state": "displayed", "name": "Trinidad & Tobago"}, {"count": 2, "path": "Uba Budo", "state": "displayed", "name": "Uba Budo"}, {"count": 2, "path": "Upala", "state": "displayed", "name": "Upala"}, {"count": 2, "path": "Vanua Levu", "state": "displayed", "name": "Vanua Levu"}, {"count": 2, "path": "Virunga", "state": "displayed", "name": "Virunga"}, {"count": 1, "path": "100 percent", "state": "displayed", "name": "100 percent"}, {"count": 1, "path": "2009 Hapa Nibby", "state": "displayed", "name": "2009 Hapa Nibby"}, {"count": 1, "path": "A case of the Xerces Blues, triple roast", "state": "displayed", "name": "A case of the Xerces Blues, triple roast"}, {"count": 1, "path": "ABOCFA Coop", "state": "displayed", "name": "ABOCFA Coop"}, {"count": 1, "path": "Abinao", "state": "displayed", "name": "Abinao"}, {"count": 1, "path": "Abstract S. w/ Jamaica nibs,batch abs60323.0", "state": "displayed", "name": "Abstract S. w/ Jamaica nibs,batch abs60323.0"}, {"count": 1, "path": "Acarigua, w/ nibs", "state": "displayed", "name": "Acarigua, w/ nibs"}, {"count": 1, "path": "Acopagro", "state": "displayed", "name": "Acopagro"}, {"count": 1, "path": "Africa meets Latina", "state": "displayed", "name": "Africa meets Latina"}, {"count": 1, "path": "Agua Fria; Sucre region", "state": "displayed", "name": "Agua Fria; Sucre region"}, {"count": 1, "path": "Akata", "state": "displayed", "name": "Akata"}, {"count": 1, "path": "Akesson\'s, batch 4411", "state": "displayed", "name": "Akesson\'s, batch 4411"}, {"count": 1, "path": "Akessons Estate, Sambirano, 2013", "state": "displayed", "name": "Akessons Estate, Sambirano, 2013"}, {"count": 1, "path": "Akessons Estate, Sambirano, Ambanja", "state": "displayed", "name": "Akessons Estate, Sambirano, Ambanja"}, {"count": 1, "path": "Akosombo", "state": "displayed", "name": "Akosombo"}, {"count": 1, "path": "Alpaco", "state": "displayed", "name": "Alpaco"}, {"count": 1, "path": "Alta Verapaz, 2014", "state": "displayed", "name": "Alta Verapaz, 2014"}, {"count": 1, "path": "Alto Beni, Covendo Region", "state": "displayed", "name": "Alto Beni, Covendo Region"}, {"count": 1, "path": "Alto Beni, Cru Savage", "state": "displayed", "name": "Alto Beni, Cru Savage"}, {"count": 1, "path": "Alto Beni, Palos Blanco", "state": "displayed", "name": "Alto Beni, Palos Blanco"}, {"count": 1, "path": "Alto Beni, Palos Blancos", "state": "displayed", "name": "Alto Beni, Palos Blancos"}, {"count": 1, "path": "Alto Beni, Upper Rio Beni, 2014", "state": "displayed", "name": "Alto Beni, Upper Rio Beni, 2014"}], "name": "name"}, {"facets": [{"count": 626, "path": "70", "state": "displayed", "name": "70"}, {"count": 213, "path": "75", "state": "displayed", "name": "75"}, {"count": 188, "path": "72", "state": "displayed", "name": "72"}, {"count": 72, "path": "65", "state": "displayed", "name": "65"}, {"count": 70, "path": "80", "state": "displayed", "name": "80"}, {"count": 49, "path": "74", "state": "displayed", "name": "74"}, {"count": 44, "path": "60", "state": "displayed", "name": "60"}, {"count": 44, "path": "68", "state": "displayed", "name": "68"}, {"count": 38, "path": "73", "state": "displayed", "name": "73"}, {"count": 36, "path": "85", "state": "displayed", "name": "85"}, {"count": 33, "path": "64", "state": "displayed", "name": "64"}, {"count": 30, "path": "71", "state": "displayed", "name": "71"}, {"count": 28, "path": "77", "state": "displayed", "name": "77"}, {"count": 27, "path": "67", "state": "displayed", "name": "67"}, {"count": 23, "path": "66", "state": "displayed", "name": "66"}, {"count": 22, "path": "76", "state": "displayed", "name": "76"}, {"count": 20, "path": "100", "state": "displayed", "name": "100"}, {"count": 17, "path": "82", "state": "displayed", "name": "82"}, {"count": 16, "path": "55", "state": "displayed", "name": "55"}, {"count": 15, "path": "78", "state": "displayed", "name": "78"}, {"count": 14, "path": "62", "state": "displayed", "name": "62"}, {"count": 11, "path": "63", "state": "displayed", "name": "63"}, {"count": 10, "path": "69", "state": "displayed", "name": "69"}, {"count": 8, "path": "58", "state": "displayed", "name": "58"}, {"count": 8, "path": "61", "state": "displayed", "name": "61"}, {"count": 8, "path": "88", "state": "displayed", "name": "88"}, {"count": 8, "path": "90", "state": "displayed", "name": "90"}, {"count": 5, "path": "81", "state": "displayed", "name": "81"}, {"count": 4, "path": "83", "state": "displayed", "name": "83"}, {"count": 4, "path": "84", "state": "displayed", "name": "84"}, {"count": 3, "path": "91", "state": "displayed", "name": "91"}, {"count": 2, "path": "56", "state": "displayed", "name": "56"}, {"count": 2, "path": "89", "state": "displayed", "name": "89"}, {"count": 2, "path": "99", "state": "displayed", "name": "99"}, {"count": 1, "path": "42", "state": "displayed", "name": "42"}, {"count": 1, "path": "46", "state": "displayed", "name": "46"}, {"count": 1, "path": "50", "state": "displayed", "name": "50"}, {"count": 1, "path": "53", "state": "displayed", "name": "53"}, {"count": 1, "path": "57", "state": "displayed", "name": "57"}, {"count": 1, "path": "79", "state": "displayed", "name": "79"}, {"count": 1, "path": "86", "state": "displayed", "name": "86"}, {"count": 1, "path": "87", "state": "displayed", "name": "87"}], "name": "cocoa_percent"}, {"facets": [{"count": 47, "path": "Soma", "state": "displayed", "name": "Soma"}, {"count": 26, "path": "Bonnat", "state": "displayed", "name": "Bonnat"}, {"count": 26, "path": "Fresco", "state": "displayed", "name": "Fresco"}, {"count": 25, "path": "Pralus", "state": "displayed", "name": "Pralus"}, {"count": 22, "path": "A. Morin", "state": "displayed", "name": "A. Morin"}, {"count": 22, "path": "Domori", "state": "displayed", "name": "Domori"}, {"count": 22, "path": "Guittard", "state": "displayed", "name": "Guittard"}, {"count": 21, "path": "Valrhona", "state": "displayed", "name": "Valrhona"}, {"count": 19, "path": "Hotel Chocolat (Coppeneur)", "state": "displayed", "name": "Hotel Chocolat (Coppeneur)"}, {"count": 18, "path": "Coppeneur", "state": "displayed", "name": "Coppeneur"}, {"count": 18, "path": "Mast Brothers", "state": "displayed", "name": "Mast Brothers"}, {"count": 17, "path": "Scharffen Berger", "state": "displayed", "name": "Scharffen Berger"}, {"count": 17, "path": "Zotter", "state": "displayed", "name": "Zotter"}, {"count": 16, "path": "Artisan du Chocolat", "state": "displayed", "name": "Artisan du Chocolat"}, {"count": 16, "path": "Dandelion", "state": "displayed", "name": "Dandelion"}, {"count": 16, "path": "Rogue", "state": "displayed", "name": "Rogue"}, {"count": 15, "path": "Szanto Tibor", "state": "displayed", "name": "Szanto Tibor"}, {"count": 14, "path": "Bittersweet Origins", "state": "displayed", "name": "Bittersweet Origins"}, {"count": 14, "path": "Castronovo", "state": "displayed", "name": "Castronovo"}, {"count": 14, "path": "Pierre Marcolini", "state": "displayed", "name": "Pierre Marcolini"}, {"count": 14, "path": "Smooth Chocolator, The", "state": "displayed", "name": "Smooth Chocolator, The"}, {"count": 14, "path": "Tejas", "state": "displayed", "name": "Tejas"}, {"count": 13, "path": "Amedei", "state": "displayed", "name": "Amedei"}, {"count": 13, "path": "Duffy\'s", "state": "displayed", "name": "Duffy\'s"}, {"count": 13, "path": "Pacari", "state": "displayed", "name": "Pacari"}, {"count": 12, "path": "Dick Taylor", "state": "displayed", "name": "Dick Taylor"}, {"count": 12, "path": "Friis Holm (Bonnat)", "state": "displayed", "name": "Friis Holm (Bonnat)"}, {"count": 11, "path": "Arete", "state": "displayed", "name": "Arete"}, {"count": 11, "path": "Middlebury", "state": "displayed", "name": "Middlebury"}, {"count": 11, "path": "Palette de Bine", "state": "displayed", "name": "Palette de Bine"}, {"count": 11, "path": "Sirene", "state": "displayed", "name": "Sirene"}, {"count": 10, "path": "Altus aka Cao Artisan", "state": "displayed", "name": "Altus aka Cao Artisan"}, {"count": 10, "path": "Idilio (Felchlin)", "state": "displayed", "name": "Idilio (Felchlin)"}, {"count": 10, "path": "La Maison du Chocolat (Valrhona)", "state": "displayed", "name": "La Maison du Chocolat (Valrhona)"}, {"count": 10, "path": "Laia aka Chat-Noir", "state": "displayed", "name": "Laia aka Chat-Noir"}, {"count": 10, "path": "Madre", "state": "displayed", "name": "Madre"}, {"count": 10, "path": "Marou", "state": "displayed", "name": "Marou"}, {"count": 10, "path": "Michel Cluizel", "state": "displayed", "name": "Michel Cluizel"}, {"count": 9, "path": "Amano", "state": "displayed", "name": "Amano"}, {"count": 9, "path": "Danta", "state": "displayed", "name": "Danta"}, {"count": 9, "path": "French Broad", "state": "displayed", "name": "French Broad"}, {"count": 9, "path": "Fruition", "state": "displayed", "name": "Fruition"}, {"count": 9, "path": "Habitual", "state": "displayed", "name": "Habitual"}, {"count": 9, "path": "L.A. Burdick (Felchlin)", "state": "displayed", "name": "L.A. Burdick (Felchlin)"}, {"count": 9, "path": "Map Chocolate", "state": "displayed", "name": "Map Chocolate"}, {"count": 9, "path": "Pitch Dark", "state": "displayed", "name": "Pitch Dark"}, {"count": 9, "path": "Ritual", "state": "displayed", "name": "Ritual"}, {"count": 9, "path": "Terroir", "state": "displayed", "name": "Terroir"}, {"count": 8, "path": "Beschle (Felchlin)", "state": "displayed", "name": "Beschle (Felchlin)"}, {"count": 8, "path": "Cacao Sampaka", "state": "displayed", "name": "Cacao Sampaka"}, {"count": 8, "path": "Chocovic", "state": "displayed", "name": "Chocovic"}, {"count": 8, "path": "Holy Cacao", "state": "displayed", "name": "Holy Cacao"}, {"count": 8, "path": "Hummingbird", "state": "displayed", "name": "Hummingbird"}, {"count": 8, "path": "Kallari (Ecuatoriana)", "state": "displayed", "name": "Kallari (Ecuatoriana)"}, {"count": 8, "path": "TCHO", "state": "displayed", "name": "TCHO"}, {"count": 8, "path": "Willie\'s Cacao", "state": "displayed", "name": "Willie\'s Cacao"}, {"count": 8, "path": "Woodblock", "state": "displayed", "name": "Woodblock"}, {"count": 7, "path": "Brasstown aka It\'s Chocolate", "state": "displayed", "name": "Brasstown aka It\'s Chocolate"}, {"count": 7, "path": "C-Amaro", "state": "displayed", "name": "C-Amaro"}, {"count": 7, "path": "Cacao Hunters", "state": "displayed", "name": "Cacao Hunters"}, {"count": 7, "path": "Chocolate Con Amor", "state": "displayed", "name": "Chocolate Con Amor"}, {"count": 7, "path": "Cravve", "state": "displayed", "name": "Cravve"}, {"count": 7, "path": "El Rey", "state": "displayed", "name": "El Rey"}, {"count": 7, "path": "Felchlin", "state": "displayed", "name": "Felchlin"}, {"count": 7, "path": "Kto", "state": "displayed", "name": "Kto"}, {"count": 7, "path": "Letterpress", "state": "displayed", "name": "Letterpress"}, {"count": 7, "path": "Manoa", "state": "displayed", "name": "Manoa"}, {"count": 7, "path": "Manufaktura Czekolady", "state": "displayed", "name": "Manufaktura Czekolady"}, {"count": 7, "path": "Potomac", "state": "displayed", "name": "Potomac"}, {"count": 7, "path": "Pump Street Bakery", "state": "displayed", "name": "Pump Street Bakery"}, {"count": 7, "path": "Rozsavolgyi", "state": "displayed", "name": "Rozsavolgyi"}, {"count": 6, "path": "Ambrosia", "state": "displayed", "name": "Ambrosia"}, {"count": 6, "path": "Askinosie", "state": "displayed", "name": "Askinosie"}, {"count": 6, "path": "Benoit Nihant", "state": "displayed", "name": "Benoit Nihant"}, {"count": 6, "path": "Blue Bandana", "state": "displayed", "name": "Blue Bandana"}, {"count": 6, "path": "Brazen", "state": "displayed", "name": "Brazen"}, {"count": 6, "path": "Cacao de Origen", "state": "displayed", "name": "Cacao de Origen"}, {"count": 6, "path": "Caoni (Tulicorp)", "state": "displayed", "name": "Caoni (Tulicorp)"}, {"count": 6, "path": "Chocolate Tree, The", "state": "displayed", "name": "Chocolate Tree, The"}, {"count": 6, "path": "Dean and Deluca (Belcolade)", "state": "displayed", "name": "Dean and Deluca (Belcolade)"}, {"count": 6, "path": "Lillie Belle", "state": "displayed", "name": "Lillie Belle"}, {"count": 6, "path": "Lonohana", "state": "displayed", "name": "Lonohana"}, {"count": 6, "path": "Mesocacao", "state": "displayed", "name": "Mesocacao"}, {"count": 6, "path": "Neuhaus (Callebaut)", "state": "displayed", "name": "Neuhaus (Callebaut)"}, {"count": 6, "path": "Ocho", "state": "displayed", "name": "Ocho"}, {"count": 6, "path": "Original Beans (Felchlin)", "state": "displayed", "name": "Original Beans (Felchlin)"}, {"count": 6, "path": "Patric", "state": "displayed", "name": "Patric"}, {"count": 6, "path": "Q Chocolate", "state": "displayed", "name": "Q Chocolate"}, {"count": 6, "path": "Shark Mountain", "state": "displayed", "name": "Shark Mountain"}, {"count": 6, "path": "Solstice", "state": "displayed", "name": "Solstice"}, {"count": 6, "path": "Theo", "state": "displayed", "name": "Theo"}, {"count": 6, "path": "Vao Vao (Chocolaterie Robert)", "state": "displayed", "name": "Vao Vao (Chocolaterie Robert)"}, {"count": 6, "path": "Zak\'s", "state": "displayed", "name": "Zak\'s"}, {"count": 6, "path": "twenty-four blackbirds", "state": "displayed", "name": "twenty-four blackbirds"}, {"count": 5, "path": "AMMA", "state": "displayed", "name": "AMMA"}, {"count": 5, "path": "Alain Ducasse", "state": "displayed", "name": "Alain Ducasse"}, {"count": 5, "path": "Bahen & Co.", "state": "displayed", "name": "Bahen & Co."}, {"count": 5, "path": "Bar Au Chocolat", "state": "displayed", "name": "Bar Au Chocolat"}, {"count": 5, "path": "Burnt Fork Bend", "state": "displayed", "name": "Burnt Fork Bend"}, {"count": 5, "path": "Cacao Barry", "state": "displayed", "name": "Cacao Barry"}, {"count": 5, "path": "Cao", "state": "displayed", "name": "Cao"}, {"count": 5, "path": "Caribeans", "state": "displayed", "name": "Caribeans"}, {"count": 5, "path": "Choklat", "state": "displayed", "name": "Choklat"}, {"count": 5, "path": "Compania de Chocolate (Salgado)", "state": "displayed", "name": "Compania de Chocolate (Salgado)"}, {"count": 5, "path": "Dark Forest", "state": "displayed", "name": "Dark Forest"}, {"count": 5, "path": "Durci", "state": "displayed", "name": "Durci"}, {"count": 5, "path": "Escazu", "state": "displayed", "name": "Escazu"}, {"count": 5, "path": "Ethel\'s Artisan (Mars)", "state": "displayed", "name": "Ethel\'s Artisan (Mars)"}, {"count": 5, "path": "Frederic Blondeel", "state": "displayed", "name": "Frederic Blondeel"}, {"count": 5, "path": "Georgia Ramon", "state": "displayed", "name": "Georgia Ramon"}, {"count": 5, "path": "Guido Castagna", "state": "displayed", "name": "Guido Castagna"}, {"count": 5, "path": "Hoja Verde (Tulicorp)", "state": "displayed", "name": "Hoja Verde (Tulicorp)"}, {"count": 5, "path": "Meadowlands", "state": "displayed", "name": "Meadowlands"}, {"count": 5, "path": "Nuance", "state": "displayed", "name": "Nuance"}, {"count": 5, "path": "Republica del Cacao (aka Confecta)", "state": "displayed", "name": "Republica del Cacao (aka Confecta)"}, {"count": 5, "path": "S.A.I.D.", "state": "displayed", "name": "S.A.I.D."}, {"count": 5, "path": "Santander", "state": "displayed", "name": "Santander"}, {"count": 5, "path": "Starchild", "state": "displayed", "name": "Starchild"}, {"count": 5, "path": "Videri", "state": "displayed", "name": "Videri"}, {"count": 5, "path": "Violet Sky", "state": "displayed", "name": "Violet Sky"}, {"count": 5, "path": "Zart Pralinen", "state": "displayed", "name": "Zart Pralinen"}, {"count": 5, "path": "Zokoko", "state": "displayed", "name": "Zokoko"}, {"count": 5, "path": "hexx", "state": "displayed", "name": "hexx"}, {"count": 5, "path": "organicfair", "state": "displayed", "name": "organicfair"}, {"count": 4, "path": "Adi", "state": "displayed", "name": "Adi"}, {"count": 4, "path": "Amatller (Simon Coll)", "state": "displayed", "name": "Amatller (Simon Coll)"}, {"count": 4, "path": "Ara", "state": "displayed", "name": "Ara"}, {"count": 4, "path": "Beehive", "state": "displayed", "name": "Beehive"}, {"count": 4, "path": "Belcolade", "state": "displayed", "name": "Belcolade"}, {"count": 4, "path": "Bisou", "state": "displayed", "name": "Bisou"}, {"count": 4, "path": "Bright", "state": "displayed", "name": "Bright"}, {"count": 4, "path": "Cacao Atlanta", "state": "displayed", "name": "Cacao Atlanta"}, {"count": 4, "path": "Cacao Prieto", "state": "displayed", "name": "Cacao Prieto"}, {"count": 4, "path": "Cacaoyere (Ecuatoriana)", "state": "displayed", "name": "Cacaoyere (Ecuatoriana)"}, {"count": 4, "path": "Cello", "state": "displayed", "name": "Cello"}, {"count": 4, "path": "Claudio Corallo", "state": "displayed", "name": "Claudio Corallo"}, {"count": 4, "path": "Damson", "state": "displayed", "name": "Damson"}, {"count": 4, "path": "Davis", "state": "displayed", "name": "Davis"}, {"count": 4, "path": "Doble & Bignall", "state": "displayed", "name": "Doble & Bignall"}, {"count": 4, "path": "Finca", "state": "displayed", "name": "Finca"}, {"count": 4, "path": "Franceschi", "state": "displayed", "name": "Franceschi"}, {"count": 4, "path": "Harper Macaw", "state": "displayed", "name": "Harper Macaw"}, {"count": 4, "path": "Heirloom Cacao Preservation (Guittard)", "state": "displayed", "name": "Heirloom Cacao Preservation (Guittard)"}, {"count": 4, "path": "Hogarth", "state": "displayed", "name": "Hogarth"}, {"count": 4, "path": "Isidro", "state": "displayed", "name": "Isidro"}, {"count": 4, "path": "K\'ul", "state": "displayed", "name": "K\'ul"}, {"count": 4, "path": "Kah Kow", "state": "displayed", "name": "Kah Kow"}, {"count": 4, "path": "Kyya", "state": "displayed", "name": "Kyya"}, {"count": 4, "path": "L\'Amourette", "state": "displayed", "name": "L\'Amourette"}, {"count": 4, "path": "Luker", "state": "displayed", "name": "Luker"}, {"count": 4, "path": "Madecasse (Cinagra)", "state": "displayed", "name": "Madecasse (Cinagra)"}, {"count": 4, "path": "Maglio", "state": "displayed", "name": "Maglio"}, {"count": 4, "path": "Mana", "state": "displayed", "name": "Mana"}, {"count": 4, "path": "Mars", "state": "displayed", "name": "Mars"}, {"count": 4, "path": "Matale", "state": "displayed", "name": "Matale"}, {"count": 4, "path": "Maverick", "state": "displayed", "name": "Maverick"}, {"count": 4, "path": "Naive", "state": "displayed", "name": "Naive"}, {"count": 4, "path": "Nathan Miller", "state": "displayed", "name": "Nathan Miller"}, {"count": 4, "path": "Nibble", "state": "displayed", "name": "Nibble"}, {"count": 4, "path": "Olive and Sinclair", "state": "displayed", "name": "Olive and Sinclair"}, {"count": 4, "path": "Olivia", "state": "displayed", "name": "Olivia"}, {"count": 4, "path": "Parliament", "state": "displayed", "name": "Parliament"}, {"count": 4, "path": "Raaka", "state": "displayed", "name": "Raaka"}, {"count": 4, "path": "Salgado", "state": "displayed", "name": "Salgado"}, {"count": 4, "path": "Silvio Bessone", "state": "displayed", "name": "Silvio Bessone"}, {"count": 4, "path": "Spencer", "state": "displayed", "name": "Spencer"}, {"count": 4, "path": "Tabal", "state": "displayed", "name": "Tabal"}, {"count": 4, "path": "Tablette (aka Vanillabeans)", "state": "displayed", "name": "Tablette (aka Vanillabeans)"}, {"count": 4, "path": "Taza", "state": "displayed", "name": "Taza"}, {"count": 4, "path": "Vintage Plantations (Tulicorp)", "state": "displayed", "name": "Vintage Plantations (Tulicorp)"}, {"count": 4, "path": "Wilkie\'s Organic", "state": "displayed", "name": "Wilkie\'s Organic"}, {"count": 3, "path": "Akesson\'s (Pralus)", "state": "displayed", "name": "Akesson\'s (Pralus)"}, {"count": 3, "path": "Bellflower", "state": "displayed", "name": "Bellflower"}, {"count": 3, "path": "Belyzium", "state": "displayed", "name": "Belyzium"}, {"count": 3, "path": "Black Mountain", "state": "displayed", "name": "Black Mountain"}, {"count": 3, "path": "Cacao Store", "state": "displayed", "name": "Cacao Store"}, {"count": 3, "path": "Chocolarder", "state": "displayed", "name": "Chocolarder"}, {"count": 3, "path": "Chocolate Makers", "state": "displayed", "name": "Chocolate Makers"}, {"count": 3, "path": "DeVries", "state": "displayed", "name": "DeVries"}, {"count": 3, "path": "Dormouse", "state": "displayed", "name": "Dormouse"}, {"count": 3, "path": "East Van Roasters", "state": "displayed", "name": "East Van Roasters"}, {"count": 3, "path": "Erithaj (A. Morin)", "state": "displayed", "name": "Erithaj (A. Morin)"}, {"count": 3, "path": "Ethereal", "state": "displayed", "name": "Ethereal"}, {"count": 3, "path": "Feitoria Cacao", "state": "displayed", "name": "Feitoria Cacao"}, {"count": 3, "path": "Fossa", "state": "displayed", "name": "Fossa"}, {"count": 3, "path": "Grenada Chocolate Co.", "state": "displayed", "name": "Grenada Chocolate Co."}, {"count": 3, "path": "Hotel Chocolat", "state": "displayed", "name": "Hotel Chocolat"}, {"count": 3, "path": "Just Good Chocolate", "state": "displayed", "name": "Just Good Chocolate"}, {"count": 3, "path": "Martin Mayer", "state": "displayed", "name": "Martin Mayer"}, {"count": 3, "path": "Moho", "state": "displayed", "name": "Moho"}, {"count": 3, "path": "Molucca", "state": "displayed", "name": "Molucca"}, {"count": 3, "path": "Momotombo", "state": "displayed", "name": "Momotombo"}, {"count": 3, "path": "Montecristi", "state": "displayed", "name": "Montecristi"}, {"count": 3, "path": "Noble Bean aka Jerjobo", "state": "displayed", "name": "Noble Bean aka Jerjobo"}, {"count": 3, "path": "Nova Monda", "state": "displayed", "name": "Nova Monda"}, {"count": 3, "path": "Omnom", "state": "displayed", "name": "Omnom"}, {"count": 3, "path": "Ranger", "state": "displayed", "name": "Ranger"}, {"count": 3, "path": "Roasting Masters", "state": "displayed", "name": "Roasting Masters"}, {"count": 3, "path": "Snake & Butterfly", "state": "displayed", "name": "Snake & Butterfly"}, {"count": 3, "path": "Spagnvola", "state": "displayed", "name": "Spagnvola"}], "name": "company"}, {"facets": [{"count": 406, "path": "Trinitario", "state": "displayed", "name": "Trinitario"}, {"count": 146, "path": "Criollo", "state": "displayed", "name": "Criollo"}, {"count": 86, "path": "Forastero", "state": "displayed", "name": "Forastero"}, {"count": 50, "path": "Forastero (Nacional)", "state": "displayed", "name": "Forastero (Nacional)"}, {"count": 41, "path": "Blend", "state": "displayed", "name": "Blend"}, {"count": 37, "path": "Criollo, Trinitario", "state": "displayed", "name": "Criollo, Trinitario"}, {"count": 37, "path": "Forastero (Arriba)", "state": "displayed", "name": "Forastero (Arriba)"}, {"count": 10, "path": "Criollo (Porcelana)", "state": "displayed", "name": "Criollo (Porcelana)"}, {"count": 8, "path": "Forastero (Parazinho)", "state": "displayed", "name": "Forastero (Parazinho)"}, {"count": 6, "path": "Forastero (Arriba) ASS", "state": "displayed", "name": "Forastero (Arriba) ASS"}, {"count": 6, "path": "Trinitario, Criollo", "state": "displayed", "name": "Trinitario, Criollo"}, {"count": 3, "path": "Beniano", "state": "displayed", "name": "Beniano"}, {"count": 3, "path": "EET", "state": "displayed", "name": "EET"}, {"count": 3, "path": "Matina", "state": "displayed", "name": "Matina"}, {"count": 3, "path": "Nacional (Arriba)", "state": "displayed", "name": "Nacional (Arriba)"}, {"count": 2, "path": "Amazon mix", "state": "displayed", "name": "Amazon mix"}, {"count": 2, "path": "Amazon, ICS", "state": "displayed", "name": "Amazon, ICS"}, {"count": 2, "path": "Criollo (Amarru)", "state": "displayed", "name": "Criollo (Amarru)"}, {"count": 2, "path": "Criollo (Ocumare 61)", "state": "displayed", "name": "Criollo (Ocumare 61)"}, {"count": 2, "path": "Criollo, Forastero", "state": "displayed", "name": "Criollo, Forastero"}, {"count": 2, "path": "Forastero (Catongo)", "state": "displayed", "name": "Forastero (Catongo)"}, {"count": 2, "path": "Nacional", "state": "displayed", "name": "Nacional"}, {"count": 2, "path": "Trinitario (85% Criollo)", "state": "displayed", "name": "Trinitario (85% Criollo)"}, {"count": 2, "path": "Trinitario, Forastero", "state": "displayed", "name": "Trinitario, Forastero"}, {"count": 1, "path": "Amazon", "state": "displayed", "name": "Amazon"}, {"count": 1, "path": "Blend-Forastero,Criollo", "state": "displayed", "name": "Blend-Forastero,Criollo"}, {"count": 1, "path": "Criollo (Ocumare 67)", "state": "displayed", "name": "Criollo (Ocumare 67)"}, {"count": 1, "path": "Criollo (Ocumare 77)", "state": "displayed", "name": "Criollo (Ocumare 77)"}, {"count": 1, "path": "Criollo (Ocumare)", "state": "displayed", "name": "Criollo (Ocumare)"}, {"count": 1, "path": "Criollo (Wild)", "state": "displayed", "name": "Criollo (Wild)"}, {"count": 1, "path": "Criollo, +", "state": "displayed", "name": "Criollo, +"}, {"count": 1, "path": "Forastero (Amelonado)", "state": "displayed", "name": "Forastero (Amelonado)"}, {"count": 1, "path": "Forastero (Arriba) ASSS", "state": "displayed", "name": "Forastero (Arriba) ASSS"}, {"count": 1, "path": "Forastero(Arriba, CCN)", "state": "displayed", "name": "Forastero(Arriba, CCN)"}, {"count": 1, "path": "Forastero, Trinitario", "state": "displayed", "name": "Forastero, Trinitario"}, {"count": 1, "path": "Trinitario (Amelonado)", "state": "displayed", "name": "Trinitario (Amelonado)"}, {"count": 1, "path": "Trinitario, Nacional", "state": "displayed", "name": "Trinitario, Nacional"}, {"count": 1, "path": "Trinitario, TCGA", "state": "displayed", "name": "Trinitario, TCGA"}], "name": "bean_type"}, {"facets": [{"count": 721, "path": "U.S.A.", "state": "displayed", "name": "U.S.A."}, {"count": 153, "path": "France", "state": "displayed", "name": "France"}, {"count": 118, "path": "Canada", "state": "displayed", "name": "Canada"}, {"count": 92, "path": "U.K.", "state": "displayed", "name": "U.K."}, {"count": 63, "path": "Italy", "state": "displayed", "name": "Italy"}, {"count": 54, "path": "Ecuador", "state": "displayed", "name": "Ecuador"}, {"count": 47, "path": "Australia", "state": "displayed", "name": "Australia"}, {"count": 40, "path": "Belgium", "state": "displayed", "name": "Belgium"}, {"count": 38, "path": "Switzerland", "state": "displayed", "name": "Switzerland"}, {"count": 33, "path": "Germany", "state": "displayed", "name": "Germany"}, {"count": 25, "path": "Austria", "state": "displayed", "name": "Austria"}, {"count": 24, "path": "Spain", "state": "displayed", "name": "Spain"}, {"count": 22, "path": "Hungary", "state": "displayed", "name": "Hungary"}, {"count": 20, "path": "Venezuela", "state": "displayed", "name": "Venezuela"}, {"count": 18, "path": "Colombia", "state": "displayed", "name": "Colombia"}, {"count": 17, "path": "Madagascar", "state": "displayed", "name": "Madagascar"}, {"count": 17, "path": "New Zealand", "state": "displayed", "name": "New Zealand"}, {"count": 15, "path": "Brazil", "state": "displayed", "name": "Brazil"}, {"count": 14, "path": "Denmark", "state": "displayed", "name": "Denmark"}, {"count": 13, "path": "Peru", "state": "displayed", "name": "Peru"}, {"count": 11, "path": "Japan", "state": "displayed", "name": "Japan"}, {"count": 11, "path": "Vietnam", "state": "displayed", "name": "Vietnam"}, {"count": 10, "path": "Guatemala", "state": "displayed", "name": "Guatemala"}, {"count": 10, "path": "Scotland", "state": "displayed", "name": "Scotland"}, {"count": 9, "path": "Argentina", "state": "displayed", "name": "Argentina"}, {"count": 9, "path": "Costa Rica", "state": "displayed", "name": "Costa Rica"}, {"count": 8, "path": "Israel", "state": "displayed", "name": "Israel"}, {"count": 8, "path": "Poland", "state": "displayed", "name": "Poland"}, {"count": 6, "path": "Honduras", "state": "displayed", "name": "Honduras"}, {"count": 6, "path": "Lithuania", "state": "displayed", "name": "Lithuania"}, {"count": 5, "path": "Domincan Republic", "state": "displayed", "name": "Domincan Republic"}, {"count": 5, "path": "Nicaragua", "state": "displayed", "name": "Nicaragua"}, {"count": 5, "path": "South Korea", "state": "displayed", "name": "South Korea"}, {"count": 5, "path": "Sweden", "state": "displayed", "name": "Sweden"}, {"count": 4, "path": "Amsterdam", "state": "displayed", "name": "Amsterdam"}, {"count": 4, "path": "Fiji", "state": "displayed", "name": "Fiji"}, {"count": 4, "path": "Ireland", "state": "displayed", "name": "Ireland"}, {"count": 4, "path": "Mexico", "state": "displayed", "name": "Mexico"}, {"count": 4, "path": "Puerto Rico", "state": "displayed", "name": "Puerto Rico"}, {"count": 4, "path": "Sao Tome", "state": "displayed", "name": "Sao Tome"}, {"count": 3, "path": "Grenada", "state": "displayed", "name": "Grenada"}, {"count": 3, "path": "Iceland", "state": "displayed", "name": "Iceland"}, {"count": 3, "path": "Portugal", "state": "displayed", "name": "Portugal"}, {"count": 3, "path": "Singapore", "state": "displayed", "name": "Singapore"}, {"count": 3, "path": "South Africa", "state": "displayed", "name": "South Africa"}, {"count": 2, "path": "Bolivia", "state": "displayed", "name": "Bolivia"}, {"count": 2, "path": "Chile", "state": "displayed", "name": "Chile"}, {"count": 2, "path": "Finland", "state": "displayed", "name": "Finland"}, {"count": 2, "path": "St. Lucia", "state": "displayed", "name": "St. Lucia"}, {"count": 1, "path": "Czechoslovakia", "state": "displayed", "name": "Czechoslovakia"}, {"count": 1, "path": "Eucador", "state": "displayed", "name": "Eucador"}, {"count": 1, "path": "Ghana", "state": "displayed", "name": "Ghana"}, {"count": 1, "path": "India", "state": "displayed", "name": "India"}, {"count": 1, "path": "Martinique", "state": "displayed", "name": "Martinique"}, {"count": 1, "path": "Niacragua", "state": "displayed", "name": "Niacragua"}, {"count": 1, "path": "Philippines", "state": "displayed", "name": "Philippines"}, {"count": 1, "path": "Russia", "state": "displayed", "name": "Russia"}, {"count": 1, "path": "Wales", "state": "displayed", "name": "Wales"}], "name": "company_location"}, {"facets": [{"count": 208, "path": "Venezuela", "state": "displayed", "name": "Venezuela"}, {"count": 187, "path": "Ecuador", "state": "displayed", "name": "Ecuador"}, {"count": 152, "path": "Peru", "state": "displayed", "name": "Peru"}, {"count": 142, "path": "Madagascar", "state": "displayed", "name": "Madagascar"}, {"count": 135, "path": "Dominican Republic", "state": "displayed", "name": "Dominican Republic"}, {"count": 56, "path": "Bolivia", "state": "displayed", "name": "Bolivia"}, {"count": 55, "path": "Brazil", "state": "displayed", "name": "Brazil"}, {"count": 55, "path": "Nicaragua", "state": "displayed", "name": "Nicaragua"}, {"count": 46, "path": "Belize", "state": "displayed", "name": "Belize"}, {"count": 41, "path": "Papua New Guinea", "state": "displayed", "name": "Papua New Guinea"}, {"count": 37, "path": "Costa Rica", "state": "displayed", "name": "Costa Rica"}, {"count": 35, "path": "Colombia", "state": "displayed", "name": "Colombia"}, {"count": 32, "path": "Ghana", "state": "displayed", "name": "Ghana"}, {"count": 32, "path": "Trinidad", "state": "displayed", "name": "Trinidad"}, {"count": 31, "path": "Vietnam", "state": "displayed", "name": "Vietnam"}, {"count": 30, "path": "Tanzania", "state": "displayed", "name": "Tanzania"}, {"count": 28, "path": "Hawaii", "state": "displayed", "name": "Hawaii"}, {"count": 28, "path": "Mexico", "state": "displayed", "name": "Mexico"}, {"count": 24, "path": "Domincan Republic", "state": "displayed", "name": "Domincan Republic"}, {"count": 24, "path": "Guatemala", "state": "displayed", "name": "Guatemala"}, {"count": 20, "path": "Jamaica", "state": "displayed", "name": "Jamaica"}, {"count": 18, "path": "Grenada", "state": "displayed", "name": "Grenada"}, {"count": 16, "path": "Indonesia", "state": "displayed", "name": "Indonesia"}, {"count": 12, "path": "Honduras", "state": "displayed", "name": "Honduras"}, {"count": 11, "path": "Cuba", "state": "displayed", "name": "Cuba"}, {"count": 9, "path": "Congo", "state": "displayed", "name": "Congo"}, {"count": 9, "path": "Sao Tome", "state": "displayed", "name": "Sao Tome"}, {"count": 8, "path": "Carribean", "state": "displayed", "name": "Carribean"}, {"count": 8, "path": "Haiti", "state": "displayed", "name": "Haiti"}, {"count": 8, "path": "St. Lucia", "state": "displayed", "name": "St. Lucia"}, {"count": 8, "path": "Uganda", "state": "displayed", "name": "Uganda"}, {"count": 7, "path": "Fiji", "state": "displayed", "name": "Fiji"}, {"count": 7, "path": "Panama", "state": "displayed", "name": "Panama"}, {"count": 7, "path": "Sao Tome & Principe", "state": "displayed", "name": "Sao Tome & Principe"}, {"count": 7, "path": "Vanuatu", "state": "displayed", "name": "Vanuatu"}, {"count": 6, "path": "West Africa", "state": "displayed", "name": "West Africa"}, {"count": 5, "path": "Ivory Coast", "state": "displayed", "name": "Ivory Coast"}, {"count": 5, "path": "Philippines", "state": "displayed", "name": "Philippines"}, {"count": 4, "path": "Central and S. America", "state": "displayed", "name": "Central and S. America"}, {"count": 4, "path": "India", "state": "displayed", "name": "India"}, {"count": 4, "path": "Puerto Rico", "state": "displayed", "name": "Puerto Rico"}, {"count": 3, "path": "Australia", "state": "displayed", "name": "Australia"}, {"count": 3, "path": "Colombia, Ecuador", "state": "displayed", "name": "Colombia, Ecuador"}, {"count": 3, "path": "Liberia", "state": "displayed", "name": "Liberia"}, {"count": 3, "path": "Solomon Islands", "state": "displayed", "name": "Solomon Islands"}, {"count": 3, "path": "South America", "state": "displayed", "name": "South America"}, {"count": 3, "path": "Togo", "state": "displayed", "name": "Togo"}, {"count": 2, "path": "El Salvador", "state": "displayed", "name": "El Salvador"}, {"count": 2, "path": "Ghana, Domin. Rep", "state": "displayed", "name": "Ghana, Domin. Rep"}, {"count": 2, "path": "Samoa", "state": "displayed", "name": "Samoa"}, {"count": 2, "path": "Sri Lanka", "state": "displayed", "name": "Sri Lanka"}, {"count": 2, "path": "Tobago", "state": "displayed", "name": "Tobago"}, {"count": 2, "path": "Trinidad, Tobago", "state": "displayed", "name": "Trinidad, Tobago"}, {"count": 1, "path": "Africa, Carribean, C. Am.", "state": "displayed", "name": "Africa, Carribean, C. Am."}, {"count": 1, "path": "Burma", "state": "displayed", "name": "Burma"}, {"count": 1, "path": "Cameroon", "state": "displayed", "name": "Cameroon"}, {"count": 1, "path": "Carribean(DR/Jam/Tri)", "state": "displayed", "name": "Carribean(DR/Jam/Tri)"}, {"count": 1, "path": "Cost Rica, Ven", "state": "displayed", "name": "Cost Rica, Ven"}, {"count": 1, "path": "DR, Ecuador, Peru", "state": "displayed", "name": "DR, Ecuador, Peru"}, {"count": 1, "path": "Dom. Rep., Madagascar", "state": "displayed", "name": "Dom. Rep., Madagascar"}, {"count": 1, "path": "Dominican Rep., Bali", "state": "displayed", "name": "Dominican Rep., Bali"}, {"count": 1, "path": "Ecuador, Mad., PNG", "state": "displayed", "name": "Ecuador, Mad., PNG"}, {"count": 1, "path": "Gabon", "state": "displayed", "name": "Gabon"}, {"count": 1, "path": "Ghana & Madagascar", "state": "displayed", "name": "Ghana & Madagascar"}, {"count": 1, "path": "Ghana, Panama, Ecuador", "state": "displayed", "name": "Ghana, Panama, Ecuador"}, {"count": 1, "path": "Gre., PNG, Haw., Haiti, Mad", "state": "displayed", "name": "Gre., PNG, Haw., Haiti, Mad"}, {"count": 1, "path": "Guat., D.R., Peru, Mad., PNG", "state": "displayed", "name": "Guat., D.R., Peru, Mad., PNG"}, {"count": 1, "path": "Indonesia, Ghana", "state": "displayed", "name": "Indonesia, Ghana"}, {"count": 1, "path": "Mad., Java, PNG", "state": "displayed", "name": "Mad., Java, PNG"}, {"count": 1, "path": "Madagascar & Ecuador", "state": "displayed", "name": "Madagascar & Ecuador"}, {"count": 1, "path": "Malaysia", "state": "displayed", "name": "Malaysia"}, {"count": 1, "path": "Martinique", "state": "displayed", "name": "Martinique"}, {"count": 1, "path": "Nigeria", "state": "displayed", "name": "Nigeria"}, {"count": 1, "path": "PNG, Vanuatu, Mad", "state": "displayed", "name": "PNG, Vanuatu, Mad"}, {"count": 1, "path": "Peru(SMartin,Pangoa,nacional)", "state": "displayed", "name": "Peru(SMartin,Pangoa,nacional)"}, {"count": 1, "path": "Peru, Belize", "state": "displayed", "name": "Peru, Belize"}, {"count": 1, "path": "Peru, Dom. Rep", "state": "displayed", "name": "Peru, Dom. Rep"}, {"count": 1, "path": "Peru, Ecuador", "state": "displayed", "name": "Peru, Ecuador"}, {"count": 1, "path": "Peru, Ecuador, Venezuela", "state": "displayed", "name": "Peru, Ecuador, Venezuela"}, {"count": 1, "path": "Peru, Mad., Dom. Rep.", "state": "displayed", "name": "Peru, Mad., Dom. Rep."}, {"count": 1, "path": "Peru, Madagascar", "state": "displayed", "name": "Peru, Madagascar"}, {"count": 1, "path": "Principe", "state": "displayed", "name": "Principe"}, {"count": 1, "path": "South America, Africa", "state": "displayed", "name": "South America, Africa"}, {"count": 1, "path": "Trinidad, Ecuador", "state": "displayed", "name": "Trinidad, Ecuador"}, {"count": 1, "path": "Trinidad-Tobago", "state": "displayed", "name": "Trinidad-Tobago"}, {"count": 1, "path": "Ven, Bolivia, D.R.", "state": "displayed", "name": "Ven, Bolivia, D.R."}, {"count": 1, "path": "Ven, Trinidad, Ecuador", "state": "displayed", "name": "Ven, Trinidad, Ecuador"}, {"count": 1, "path": "Ven., Indonesia, Ecuad.", "state": "displayed", "name": "Ven., Indonesia, Ecuad."}, {"count": 1, "path": "Ven., Trinidad, Mad.", "state": "displayed", "name": "Ven., Trinidad, Mad."}, {"count": 1, "path": "Ven.,Ecu.,Peru,Nic.", "state": "displayed", "name": "Ven.,Ecu.,Peru,Nic."}, {"count": 1, "path": "Venez,Africa,Brasil,Peru,Mex", "state": "displayed", "name": "Venez,Africa,Brasil,Peru,Mex"}, {"count": 1, "path": "Venezuela, Carribean", "state": "displayed", "name": "Venezuela, Carribean"}, {"count": 1, "path": "Venezuela, Dom. Rep.", "state": "displayed", "name": "Venezuela, Dom. Rep."}, {"count": 1, "path": "Venezuela, Ghana", "state": "displayed", "name": "Venezuela, Ghana"}, {"count": 1, "path": "Venezuela, Java", "state": "displayed", "name": "Venezuela, Java"}, {"count": 1, "path": "Venezuela, Trinidad", "state": "displayed", "name": "Venezuela, Trinidad"}, {"count": 1, "path": "Venezuela/ Ghana", "state": "displayed", "name": "Venezuela/ Ghana"}], "name": "broad_bean_origin"}]}',
        'ontology': '@prefix ns1: <http://www.w3.org/2002/07/owl#> .\n' +
            '@prefix ns2: <http://www.w3.org/ns/prov#> .\n' +
            '@prefix ns3: <http://www.w3.org/2007/05/powder-s#> .\n' +
            '@prefix ns4: <http://xmlns.com/foaf/0.1/> .\n' +
            '@prefix ns5: <http://purl.org/dc/terms/> .\n' +
            '@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n' +
            '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n' +
            '@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n' +
            '@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n' +
            '\n' +
            '<http://schema.org/AdministrativeArea> a rdfs:Class ;\n' +
            '    rdfs:label "AdministrativeArea" ;\n' +
            '    rdfs:comment "A geographical region, typically under the jurisdiction of a particular government." ;\n' +
            '    rdfs:subClassOf <http://schema.org/Place> .\n' +
            '\n' +
            '<http://schema.org/Country> a rdfs:Class ;\n' +
            '    rdfs:label "Country" ;\n' +
            '    rdfs:comment "A country." ;\n' +
            '    rdfs:subClassOf <http://schema.org/AdministrativeArea> .\n' +
            '\n' +
            '<http://schema.org/Place> a rdfs:Class ;\n' +
            '    rdfs:label "Place" ;\n' +
            '    rdfs:comment "Entities that have a somewhat fixed, physical extension." ;\n' +
            '    rdfs:subClassOf <http://schema.org/Thing> .\n' +
            '\n' +
            '<http://schema.org/Product> a rdfs:Class ;\n' +
            '    rdfs:label "Product" ;\n' +
            '    ns5:source <http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms> ;\n' +
            '    rdfs:comment "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online." ;\n' +
            '    rdfs:subClassOf <http://schema.org/Thing> .\n' +
            '\n' +
            '<http://kmi.open.ac.uk/projects/smartproducts/ontologies/food.owl#hasGeographicalProvenance> a ns1:ObjectProperty ;\n' +
            '    rdfs:domain [ ] ;\n' +
            '    rdfs:range <http://kmi.open.ac.uk/projects/smartproducts/ontologies/generic.owl#PhysicalGeographicEntity> .\n' +
            '\n' +
            '<http://purl.org/goodrelations/v1#Location> a ns1:Class ;\n' +
            '    rdfs:label "Location"@en ;\n' +
            '    rdfs:comment """A location is a point or area of interest from which a particular product or service is available, e.g. a store, a bus stop, a gas station, or a ticket booth. The difference to gr:BusinessEntity is that the gr:BusinessEntity is the legal entity (e.g. a person or corporation) making the offer, while gr:Location is the store, office, or place. A chain restaurant will e.g. have one legal entity but multiple restaurant locations. Locations are characterized by an address or geographical position and a set of opening hour specifications for various days of the week.\n' +
            '\t\t\n' +
            'Example: A rental car company may offer the Business Function Lease Out of cars from two locations, one in Fort Myers, Florida, and one in Boston, Massachussetts. Both stations are open 7:00 - 23:00 Mondays through Saturdays.\n' +
            '\n' +
            'Note: Typical address standards (vcard) and location data (geo, WGC84) should be attached to a gr:Location node. Since there already exist established vocabularies for this, the GoodRelations ontology does not provide respective attributes. Instead, the use of respective vocabularies is recommended. However, the gr:hasGlobalLocationNumber property is  provided for linking to public identifiers for business locations.\n' +
            '\t\t\n' +
            'Compatibility with schema.org: This class is equivalent to http://schema.org/Place."""@en ;\n' +
            '    rdfs:isDefinedBy <http://purl.org/goodrelations/v1> ;\n' +
            '    ns1:disjointWith <http://purl.org/goodrelations/v1#Brand>,\n' +
            '        <http://purl.org/goodrelations/v1#BusinessEntity>,\n' +
            '        <http://purl.org/goodrelations/v1#BusinessEntityType>,\n' +
            '        <http://purl.org/goodrelations/v1#BusinessFunction>,\n' +
            '        <http://purl.org/goodrelations/v1#DayOfWeek>,\n' +
            '        <http://purl.org/goodrelations/v1#DeliveryMethod>,\n' +
            '        <http://purl.org/goodrelations/v1#Offering>,\n' +
            '        <http://purl.org/goodrelations/v1#OpeningHoursSpecification>,\n' +
            '        <http://purl.org/goodrelations/v1#PaymentMethod>,\n' +
            '        <http://purl.org/goodrelations/v1#PriceSpecification>,\n' +
            '        <http://purl.org/goodrelations/v1#QuantitativeValue>,\n' +
            '        <http://purl.org/goodrelations/v1#TypeAndQuantityNode>,\n' +
            '        <http://purl.org/goodrelations/v1#WarrantyPromise>,\n' +
            '        <http://purl.org/goodrelations/v1#WarrantyScope> ;\n' +
            '    ns1:equivalentClass <http://purl.org/goodrelations/v1#LocationOfSalesOrServiceProvisioning> .\n' +
            '\n' +
            '<http://www.ontotext.com/proton/protonext#Food> a ns1:Class ;\n' +
            '    rdfs:label "Food"@en ;\n' +
            '    rdfs:comment "Food is any eatable or drinkable substance that is normally consumed by humans. DBPedia"@en ;\n' +
            '    rdfs:subClassOf <http://www.ontotext.com/proton/protontop#Object> .\n' +
            '\n' +
            '<http://www.productontology.org/id/Chocolate> a ns1:Class ;\n' +
            '    rdfs:label "Sjokolade"@af,\n' +
            '        "Schokolade"@als,\n' +
            '        "ቸኮላታ"@am,\n' +
            '        "Chicolate"@an,\n' +
            '        "Ceocōlāte"@ang,\n' +
            '        "شوكولاتة"@ar,\n' +
            '        "شوكولاته"@arz,\n' +
            '        "Chicolate"@ast,\n' +
            '        "Şokolad"@az,\n' +
            '        "شوکولات"@azb,\n' +
            '        "Chocolate"@en ;\n' +
            '    rdfs:comment """Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods. The earliest evidence of use traces to the Olmecs (modern day Mexico), with evidence of chocolate beverages dating to 1900 BC. The majority of Mesoamerican people made chocolate beverages, including the Maya and Aztecs. The word "chocolate" is derived from the Spanish word chocolate, which in turn derive from the Classical Nahuatl word xocolātl.\n' +
            'The seeds of the cacao tree have an intense bitter taste and must be fermented to develop the flavor. After fermentation, the beans are dried, cleaned, and roasted. The shell is removed to produce cacao nibs, which are then ground to cocoa mass, unadulterated chocolate in rough form. Once the cocoa mass is liquefied by heating, it is called chocolate liquor. The liquor may also be cooled and processed into its two components: cocoa solids and cocoa butter. Baking chocolate, also called bitter chocolate, contains cocoa solids and cocoa butter in varying proportions, without any added sugar. Powdered baking cocoa, which contains more fiber than it contains cocoa butter, can be processed with alkali to produce dutch cocoa. Much of the chocolate consumed today is in the form of sweet chocolate, a combination of cocoa solids, cocoa butter or added vegetable oils, and sugar. Milk chocolate is sweet chocolate that additionally contains milk powder or condensed milk. White chocolate contains cocoa butter, sugar, and milk, but no cocoa solids.\n' +
            'Chocolate is one of the most popular food types and flavors in the world, and many foodstuffs involving chocolate exist, particularly desserts, including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. Many candies are filled with or coated with sweetened chocolate. Chocolate bars, either made of solid chocolate or other ingredients coated in chocolate, are eaten as snacks. Gifts of chocolate molded into different shapes (such as eggs, hearts, coins) are traditional on certain Western holidays, including Christmas, Easter, Valentine\'s Day, and Hanukkah. Chocolate is also used in cold and hot beverages, such as chocolate milk and hot chocolate, and in some alcoholic drinks, such as creme de cacao.\n' +
            'Although cocoa originated in the Americas, West African countries, particularly Côte d\'Ivoire and Ghana, are the leading producers of cocoa in the 21st century, accounting for some 60% of the world cocoa supply.\n' +
            'With some two million children involved in the farming of cocoa in West Africa, child slavery and trafficking were major concerns in 2018. However, international attempts to improve conditions for children were failing because of persistent poverty, absence of schools, increasing world cocoa demand, more intensive farming of cocoa, and continued exploitation of child labor.\n' +
            ' \n' +
            '\n' +
            '(Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Chocolate)"""@en ;\n' +
            '    rdfs:isDefinedBy <http://www.productontology.org/#> ;\n' +
            '    rdfs:seeAlso <http://dbpedia.org/resource/Chocolate>,\n' +
            '        <http://www.productontology.org/>,\n' +
            '        <http://www.productontology.org/doc/Chocolate> ;\n' +
            '    rdfs:subClassOf <http://purl.org/goodrelations/v1#ProductOrService>,\n' +
            '        <http://schema.org/Product> ;\n' +
            '    ns3:describedby <http://www.productontology.org/doc/Chocolate.rdf>,\n' +
            '        <http://www.productontology.org/doc/Chocolate.ttl> ;\n' +
            '    ns4:homepage <http://www.productontology.org/doc/Chocolate.html> ;\n' +
            '    ns4:page <http://en.wikipedia.org/wiki/Chocolate> .\n' +
            '\n' +
            'rdf:type a rdf:Property ;\n' +
            '    rdfs:label "type" ;\n' +
            '    rdfs:comment "The subject is an instance of a class." ;\n' +
            '    rdfs:domain rdfs:Resource ;\n' +
            '    rdfs:isDefinedBy rdf: ;\n' +
            '    rdfs:range rdfs:Class .\n' +
            '\n' +
            'rdfs:comment a rdf:Property ;\n' +
            '    rdfs:label "comment" ;\n' +
            '    rdfs:comment "A description of the subject resource." ;\n' +
            '    rdfs:domain rdfs:Resource ;\n' +
            '    rdfs:isDefinedBy rdfs: ;\n' +
            '    rdfs:range rdfs:Literal .\n' +
            '\n' +
            'rdfs:label a rdf:Property ;\n' +
            '    rdfs:label "label" ;\n' +
            '    rdfs:comment "A human-readable name for the subject." ;\n' +
            '    rdfs:domain rdfs:Resource ;\n' +
            '    rdfs:isDefinedBy rdfs: ;\n' +
            '    rdfs:range rdfs:Literal .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/Company> a ns1:Class ;\n' +
            '    rdfs:label "Unternehmen"@de,\n' +
            '        "εταιρία"@el,\n' +
            '        "company"@en,\n' +
            '        "empresa"@es,\n' +
            '        "entreprise"@fr,\n' +
            '        "comhlacht"@ga,\n' +
            '        "会社"@ja,\n' +
            '        "회사"@ko,\n' +
            '        "bedrijf"@nl,\n' +
            '        "empresa"@pt ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:subClassOf <http://dbpedia.org/ontology/Organisation> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/Company> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:Company> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/Food> a ns1:Class ;\n' +
            '    rdfs:label "Lebensmittel"@de,\n' +
            '        "φαγητό"@el,\n' +
            '        "Food"@en,\n' +
            '        "alimento"@es,\n' +
            '        "nourriture"@fr,\n' +
            '        "bia"@ga,\n' +
            '        "食品"@ja,\n' +
            '        "음식"@ko,\n' +
            '        "voedsel"@nl,\n' +
            '        "jedzenie"@pl,\n' +
            '        "comida"@pt ;\n' +
            '    rdfs:comment "Lebensmittel umfasst als Oberbegriff sowohl Getränke als auch die Nahrungsmittel und Genussmittel."@de,\n' +
            '        "Φαγητό είναι οποιαδήποτε φαγώσιμη ή πόσιμη ουσία που καταναλώνεται κανονικά από ανθρώπους."@el,\n' +
            '        "Food is any eatable or drinkable substance that is normally consumed by humans."@en ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:subClassOf ns1:Thing ;\n' +
            '    ns1:equivalentClass <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#FunctionalSubstance>,\n' +
            '        <http://www.wikidata.org/entity/Q2095> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/Food> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:Food> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/country> a rdf:Property,\n' +
            '        ns1:ObjectProperty ;\n' +
            '    rdfs:label "estat"@ca,\n' +
            '        "Land"@de,\n' +
            '        "χώρα"@el,\n' +
            '        "country"@en,\n' +
            '        "país"@es,\n' +
            '        "pays"@fr,\n' +
            '        "tír"@ga,\n' +
            '        "land"@nl,\n' +
            '        "kraj"@pl,\n' +
            '        "país"@pt ;\n' +
            '    rdfs:comment "The country where the thing is located."@en ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:range <http://dbpedia.org/ontology/Country> ;\n' +
            '    rdfs:subPropertyOf <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#hasLocation> ;\n' +
            '    ns1:equivalentProperty <http://www.wikidata.org/entity/P17> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/country> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyProperty:country> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/rating> a rdf:Property,\n' +
            '        ns1:DatatypeProperty ;\n' +
            '    rdfs:label "Wertung"@de,\n' +
            '        "rating"@en,\n' +
            '        "cijfer"@nl ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:range xsd:float ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/rating> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyProperty:rating> .\n' +
            '\n' +
            '<http://purl.org/goodrelations/v1#ProductOrService> a ns1:Class ;\n' +
            '    rdfs:label "Product or service"@en ;\n' +
            '    rdfs:comment """The superclass of all classes describing products or services types, either by nature or purpose. Examples for such subclasses are "TV set", "vacuum cleaner", etc. An instance of this class can be either an actual product or service (gr:Individual), a placeholder instance for unknown instances of a mass-produced commodity (gr:SomeItems), or a model / prototype specification (gr:ProductOrServiceModel). When in doubt, use gr:SomeItems.\n' +
            '\n' +
            'Examples: \n' +
            'a) MyCellphone123, i.e. my personal, tangible cell phone (gr:Individual)\n' +
            'b) Siemens1234, i.e. the Siemens cell phone make and model 1234 (gr:ProductOrServiceModel)\n' +
            'c) dummyCellPhone123 as a placeholder for actual instances of a certain kind of cell phones (gr:SomeItems)\n' +
            '\t\n' +
            'Note: Your first choice for specializations of gr:ProductOrService should be http://www.productontology.org.\n' +
            '\n' +
            'Compatibility with schema.org: This class is (approximately) equivalent to http://schema.org/Product."""@en ;\n' +
            '    rdfs:isDefinedBy <http://purl.org/goodrelations/v1> ;\n' +
            '    ns1:disjointWith <http://purl.org/goodrelations/v1#Brand>,\n' +
            '        <http://purl.org/goodrelations/v1#BusinessEntityType>,\n' +
            '        <http://purl.org/goodrelations/v1#BusinessFunction>,\n' +
            '        <http://purl.org/goodrelations/v1#DayOfWeek>,\n' +
            '        <http://purl.org/goodrelations/v1#DeliveryMethod>,\n' +
            '        <http://purl.org/goodrelations/v1#Offering>,\n' +
            '        <http://purl.org/goodrelations/v1#OpeningHoursSpecification>,\n' +
            '        <http://purl.org/goodrelations/v1#PriceSpecification>,\n' +
            '        <http://purl.org/goodrelations/v1#QuantitativeValue>,\n' +
            '        <http://purl.org/goodrelations/v1#TypeAndQuantityNode>,\n' +
            '        <http://purl.org/goodrelations/v1#WarrantyPromise>,\n' +
            '        <http://purl.org/goodrelations/v1#WarrantyScope> .\n' +
            '\n' +
            '<http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#FunctionalSubstance> a ns1:Class ;\n' +
            '    rdfs:label "Functional substance"@en ;\n' +
            '    rdfs:isDefinedBy <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl> ;\n' +
            '    rdfs:subClassOf <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Substance> .\n' +
            '\n' +
            '<http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#hasLocation> a ns1:ObjectProperty ;\n' +
            '    rdfs:label "has location"@en,\n' +
            '        "ha localizzazione"@it ;\n' +
            '    rdfs:comment """A generic, relative spatial location, holding between any entities. E.g. \'the cat is on the mat\', \'Omar is in Samarcanda\', \'the wound is close to the femural artery\'.\n' +
            'For \'absolute\' locations, see SpaceRegion"""^^xsd:string ;\n' +
            '    rdfs:domain <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Entity> ;\n' +
            '    rdfs:isDefinedBy <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl> ;\n' +
            '    rdfs:range <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Entity> ;\n' +
            '    rdfs:subPropertyOf <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#associatedWith> ;\n' +
            '    ns1:inverseOf <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#isLocationOf> .\n' +
            '\n' +
            '<http://www.ontotext.com/proton/protontop#Object> a ns1:Class ;\n' +
            '    rdfs:label "Object"@en ;\n' +
            '    rdfs:comment "Objects are entities that could be claimed to exist - in some sense of existence. An object can play a certain role in some happenings. Objects could be substantially real - as the Buckingham Palace or a hardcopy book - or substantially imperceptible - for instance, an electronic document that exists only virtually, one cannot touch it."@en ;\n' +
            '    rdfs:subClassOf <http://www.ontotext.com/proton/protontop#Entity> .\n' +
            '\n' +
            'ns1:Thing a ns1:Class ;\n' +
            '    rdfs:label "Thing" ;\n' +
            '    rdfs:comment "The class of OWL individuals." ;\n' +
            '    rdfs:isDefinedBy ns1: .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/Country> a ns1:Class ;\n' +
            '    rdfs:label "Staat"@de,\n' +
            '        "χώρα"@el,\n' +
            '        "country"@en,\n' +
            '        "país"@es,\n' +
            '        "pays"@fr,\n' +
            '        "tír"@ga,\n' +
            '        "国"@ja,\n' +
            '        "나라"@ko,\n' +
            '        "land"@nl,\n' +
            '        "Государство"@ru,\n' +
            '        "država"@sl ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:subClassOf <http://dbpedia.org/ontology/PopulatedPlace> ;\n' +
            '    ns1:equivalentClass <http://schema.org/Country>,\n' +
            '        <http://www.wikidata.org/entity/Q6256> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/Country> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:Country> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/Organisation> a ns1:Class ;\n' +
            '    rdfs:label "Organisation"@de,\n' +
            '        "οργάνωση"@el,\n' +
            '        "organisation"@en,\n' +
            '        "organización"@es,\n' +
            '        "organisation"@fr,\n' +
            '        "組織"@ja,\n' +
            '        "조직"@ko,\n' +
            '        "organisatie"@nl,\n' +
            '        "organização"@pt,\n' +
            '        "Организация"@ru,\n' +
            '        "organizacija"@sl ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:subClassOf <http://dbpedia.org/ontology/Agent> ;\n' +
            '    ns1:disjointWith <http://dbpedia.org/ontology/wgs84_pos:SpatialThing> ;\n' +
            '    ns1:equivalentClass <http://schema.org/Organization>,\n' +
            '        <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#SocialPerson>,\n' +
            '        <http://www.wikidata.org/entity/Q43229> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/Organisation> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:Organisation> .\n' +
            '\n' +
            '<http://dbpedia.org/ontology/PopulatedPlace> a ns1:Class ;\n' +
            '    rdfs:label "تجمع سكاني"@ar,\n' +
            '        "bewohnter Ort"@de,\n' +
            '        "πυκνοκατοικημένη περιοχή"@el,\n' +
            '        "populated place"@en,\n' +
            '        "lieu habité"@fr,\n' +
            '        "bebouwde omgeving"@nl ;\n' +
            '    rdfs:comment "Πυκνοκατοικημένη περιοχή, είναι η περιοχή ή το μέρος με μεγάλο αριθμό κτιρίων και μεγάλο μόνιμο πληθυσμό, σε σύγκριση με την γεωγραφική περιοχή που καταλαμβάνει (μεγαλούπολη, πόλη ή χωριό)."@el,\n' +
            '        "As defined by the United States Geological Survey, a populated place is a place or area with clustered or scattered buildings and a permanent human population (city, settlement, town, or village) referenced with geographic coordinates (http://en.wikipedia.org/wiki/Populated_place)."@en ;\n' +
            '    rdfs:isDefinedBy <http://dbpedia.org/ontology/> ;\n' +
            '    rdfs:subClassOf <http://dbpedia.org/ontology/Place> ;\n' +
            '    ns1:sameAs <http://dbpedia.org/ontology/PopulatedPlace> ;\n' +
            '    ns3:describedby <http://dbpedia.org/ontology/data/definitions.ttl> ;\n' +
            '    ns2:wasDerivedFrom <http://mappings.dbpedia.org/index.php/OntologyClass:PopulatedPlace> .\n' +
            '\n',
        'mapping': 'mappings:\n' +
            '  bean_country:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://dbpedia.org/ontology/Country\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/PopulatedPlace\']\n' +
            '      - [a, \'http://schema.org/Country\']\n' +
            '      - [a, \'http://ontology.eil.utoronto.ca/icontact.owl#SchemaOrgThing\']\n' +
            '      - [a, \'http://schema.org/AdministrativeArea\']\n' +
            '      - [a, \'http://schema.org/Place\']\n' +
            '      - [a, \'http://rdfs.co/juso/SpatialThing\']\n' +
            '      - [a, \'http://purl.org/goodrelations/v1#Location\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(broad_bean_origin)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/chocolate-bars@public/Country/$(broad_bean_origin)/\n' +
            '  chocolate_bar:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://www.productontology.org/id/Chocolate\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/Food\']\n' +
            '      - [a, \'http://www.w3.org/2002/07/owl#Thing\']\n' +
            '      - [a, \'http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#FunctionalSubstance\']\n' +
            '      - [a, \'http://www.ontotext.com/proton/protonext#Food\']\n' +
            '      - [a, \'http://www.ontotext.com/proton/protontop#Object\']\n' +
            '      - [a, \'http://schema.org/Product\']\n' +
            '      - [a, \'http://purl.org/goodrelations/v1#ProductOrService\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(company) $(name) chocolate bar]\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#comment\', $(company) $(name) chocolate bar with $(cocoa_percent)% cacao rated $(rating)/5]\n' +
            '      - [\'https://schema.org/manufacturer\', company]\n' +
            '      - [\'http://kmi.open.ac.uk/projects/smartproducts/ontologies/food.owl#hasGeographicalProvenance\',\n' +
            '         bean_country]\n' +
            '      - [\'http://dbpedia.org/ontology/rating\', $(rating)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/chocolate-bars@public/Chocolate/$(name)-$(ref)/\n' +
            '  company:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'https://schema.org/Organization\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/Company\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/Organisation\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(company)]\n' +
            '      - [\'http://dbpedia.org/ontology/country\', company_country]\n' +
            '      - [\'http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#hasLocation\', company_country]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/chocolate-bars@public/Company/$(company)/\n' +
            '  company_country:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://dbpedia.org/ontology/Country\']\n' +
            '      - [a, \'http://dbpedia.org/ontology/PopulatedPlace\']\n' +
            '      - [a, \'http://schema.org/Country\']\n' +
            '      - [a, \'http://ontology.eil.utoronto.ca/icontact.owl#SchemaOrgThing\']\n' +
            '      - [a, \'http://schema.org/AdministrativeArea\']\n' +
            '      - [a, \'http://schema.org/Place\']\n' +
            '      - [a, \'http://rdfs.co/juso/SpatialThing\']\n' +
            '      - [a, \'http://purl.org/goodrelations/v1#Location\']\n' +
            '      - [\'http://www.w3.org/2000/01/rdf-schema#label\', $(company_location)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/chocolate-bars@public/Country/$(company_location)/\n' +
            'sources:\n' +
            '  dataset-source: [chocolate-bars@public.json~jsonpath, \'$.[*].fields\']'
    }
];

var form = new Vue({
    el: '#form',
    data: {
        examples: examples,
        selected_example: {},
        dataset: '',
        ontology: '',
        mapping: ''
    },
    watch: {
        selected_example: function () {
            this.dataset = this.selected_example.dataset;
            this.ontology = this.selected_example.ontology;
            this.mapping = this.selected_example.mapping;
        }
    }
});