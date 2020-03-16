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
        'dataset': '{\n' +
            '"nhits": 1708,\n' +
            '"parameters": {\n' +
            '"dataset": [\n' +
            '"chocolate-bars@public"\n' +
            '],\n' +
            '"timezone": "UTC",\n' +
            '"rows": 2,\n' +
            '"format": "json",\n' +
            '"facet": [\n' +
            '"company",\n' +
            '"name",\n' +
            '"cocoa_percent",\n' +
            '"company_location",\n' +
            '"broad_bean_origin",\n' +
            '"bean_type"\n' +
            ']\n' +
            '},\n' +
            '"records": [\n' +
            '{\n' +
            '"datasetid": "chocolate-bars@public",\n' +
            '"recordid": "01256e18e93b40a34d276fc71945926680d9e72d",\n' +
            '"fields": {\n' +
            '"rating": 2.75,\n' +
            '"review_date": "2013",\n' +
            '"name": "Panama",\n' +
            '"cocoa_percent": 70,\n' +
            '"company": "A. Morin",\n' +
            '"company_location": "France",\n' +
            '"broad_bean_origin": "Panama",\n' +
            '"ref": "1011"\n' +
            '},\n' +
            '"record_timestamp": "2016-12-20T16:57:04.946000+00:00"\n' +
            '},\n' +
            '{\n' +
            '"datasetid": "chocolate-bars@public",\n' +
            '"recordid": "4b53e4d2eddd806000268ba10e05d13638afc457",\n' +
            '"fields": {\n' +
            '"rating": 4,\n' +
            '"review_date": "2013",\n' +
            '"name": "Chuao",\n' +
            '"cocoa_percent": 70,\n' +
            '"company": "A. Morin",\n' +
            '"bean_type": "Trinitario",\n' +
            '"company_location": "France",\n' +
            '"broad_bean_origin": "Venezuela",\n' +
            '"ref": "1015"\n' +
            '},\n' +
            '"record_timestamp": "2016-12-20T16:57:04.946000+00:00"\n' +
            '}\n' +
            ']\n' +
            '}',
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
            '      - [\'http://schema.org/manufacturer\', company]\n' +
            '      - [\'http://kmi.open.ac.uk/projects/smartproducts/ontologies/food.owl#hasGeographicalProvenance\',\n' +
            '         bean_country]\n' +
            '      - [\'http://dbpedia.org/ontology/rating\', $(rating)]\n' +
            '    source: dataset-source\n' +
            '    subject: https://data.opendatasoft.com/ld/resources/chocolate-bars@public/Chocolate/$(name)-$(ref)/\n' +
            '  company:\n' +
            '    predicateobjects:\n' +
            '      - [a, \'http://schema.org/Organization\']\n' +
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