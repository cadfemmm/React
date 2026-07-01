export const SCHEMA = {
   "title":"Depression Anxiety Stress Scale (DASS-21)",
   "enableScoreToggle":true,
   "actions":[
      {
         "type":"toggle-show-scores"
      }
   ],
   "sections":[
      {
         "fields":[
            {
               "name":"q1",
               "label":"1. I found it hard to wind down.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "info":{
                  "title":"DASS-21 Scale",
                  "content":[
                     "0 – Did not apply to me at all",
                     "1 – Applied to me some of the time",
                     "2 – Applied to me a good part of the time",
                     "3 – Applied to me most of the time"
                  ]
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q2",
               "label":"2. I was aware of dryness of my mouth.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q3",
               "label":"3. I couldn't seem to experience any positive feeling at all.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q4",
               "label":"4. I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion).",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q5",
               "label":"5. I found it difficult to work up the initiative to do things.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q6",
               "label":"6. I tended to over-react to situations.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q7",
               "label":"7. I experienced trembling (e.g. in the hands).",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q8",
               "label":"8. I felt that I was using a lot of nervous energy.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q9",
               "label":"9. I was worried about situations in which I might panic and make a fool of myself.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q10",
               "label":"10. I felt that I had nothing to look forward to.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q11",
               "label":"11. I found myself getting agitated.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q12",
               "label":"12. I found it difficult to relax.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q13",
               "label":"13. I felt down-hearted and blue.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q14",
               "label":"14. I was intolerant of anything that kept me from getting on with what I was doing.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q15",
               "label":"15. I felt I was close to panic.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q16",
               "label":"16. I was unable to become enthusiastic about anything.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q17",
               "label":"17. I felt I wasn't worth much as a person.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q18",
               "label":"18. I felt that I was rather touchy.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q19",
               "label":"19. I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat).",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q20",
               "label":"20. I felt scared without any good reason.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            },
            {
               "name":"q21",
               "label":"21. I felt that life was meaningless.",
               "type":"radio-matrix",
               "validation":{
                  "required":true,
                  "message":"This question is required"
               },
               "showInfoInRow":false,
               "options":[
                  {
                     "label":"Did not apply to me at all (0)",
                     "value":0
                  },
                  {
                     "label":"Applied to me some of the time (1)",
                     "value":1
                  },
                  {
                     "label":"Applied to me a good part of the time (2)",
                     "value":2
                  },
                  {
                     "label":"Applied to me most of the time (3)",
                     "value":3
                  }
               ]
            }
         ]
      }
   ]
}