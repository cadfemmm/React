const SCHEMA = {
  "title": "Becker Work Adjustment Profile",
  "fields": [
    {
      "type": "accordion",
      "label": "WORK HABITS/ATTITUDES DOMAIN (HA)",
      "children": [
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Neglects body care; Dirty",
            "Often unclean; Body odor",
            "Usually clean; Occasional odor",
            "Frequently clean; No body odor",
            "Regularly clean; No body odor"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_1",
          "label": "1. PERSONAL HYGIENE:Bathes, washes, and uses deodorants to maintain body cleanliness",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Never wears proper clothing",
            "Often dress is inappropriate",
            "Usually dress is appropriate",
            "Frequently wears proper dress",
            "Regularly wears proper dress"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_2",
          "label": "2. APPROPRIATE CLOTHING: Wears appropriate dress in the work situations",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Ill-groomed; Sloppy",
            "Often unkempt",
            "Usually well-groomed",
            "Well-groomed; Neat",
            "Exceptional personal appearance"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_3",
          "label": "3. PERSONAL APPEARANCE: Maintains a neat appearance and personal grooming",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Always late: No concept of time",
            "Often late",
            "Generally on time",
            "Nearly always on time",
            "Consistently on time"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_4",
          "label": "4. PUNCTUALITY: Promptness for reporting to work at starting times in the morning, after lunch, and after break periods for a randomly selected 20-day work period",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Indifferent; Needs constant pushing",
            "Often needs prodding to do assigned work",
            "Somewhat motivated with assigned work",
            "Considerably motivated with assigned work",
            "Highly motivated; Seeks additional new work"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_5",
          "label": "5. MOTIVATION: Initiative and interest when performing job assignments",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Has more than 5 absences",
            "Has 3-5 absences",
            "Has 2 absences",
            "Has 1 absences",
            "Attends regularly; No absences"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_6",
          "label": "6. ATTENDENCE: Frequently of absences for a randomly selected 20-day work period",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Requires close supervision; Unreliable",
            "Requires frequent checking",
            "Generally reliable",
            "Seldom needs checking",
            "Highly reliable; Conscientious"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_7",
          "label": "7. DEPENDABILITY: Fulfills assignments in a reliable and dependable manner",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Poor posture; Slouched",
            "Awkward posture",
            "Fairly good posture",
            "Good posture",
            "Excellent posture"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_8",
          "label": "8. WORK POSTURE: Works with good posture and positioning",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Poor eating habits, Untidy",
            "Often untidy eating habits",
            "Fairly good manners and eating habits",
            "Good manners and eating habits",
            "Exceptional manners and eating habits"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_9",
          "label": "9. EATING HABITS: Demonstrates appropriate use of utensils, acceptable table habits, and polite requests for table items",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Consistently neglects most toileting tasks",
            "Often neglects some toileting tasks",
            "Occasionally neglects a toileting task",
            "Seldom neglects a toileting task",
            "Consistently performs all toileting tasks"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ha_10",
          "label": "10. RESTROOM USE:Demonstrates self-care toileting tasks- uses toilet tissue appropriately, flushes toilet after use, washes and dries hands, closes door",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "score-box",
          "name": "ha_total",
          "label": "WORK HABITS/ATTITUDES DOMAIN - RAW SCORE TOTAL"
        }
      ]
    },
    {
      "type": "accordion",
      "label": "INTERPERSONAL RELATIONS DOMAIN (IR)",
      "children": [
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Rude; Uses profanity",
            "Often impolite",
            "Ordinarily polite",
            "Courteous; Polite",
            "Exceptional relations"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_1",
          "label": "1. PERSONAL RELATIONS: Courteous and respectful toward co-workers and supervisors",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Avoided by others; Disliked",
            "Has few friends; Tolerated by others",
            "Generally liked by others",
            "Well-liked by most",
            "Sought after by others"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_2",
          "label": "2. GROUP ACCEPTANCE: Approval and acceptance by co-workers",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Defiant; Antagonistic",
            "Often critical of authority",
            "Ordinarily cooperative",
            "Respectful; Cooperates well",
            "Highly cooperative"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_3",
          "label": "3. COOPERATION – Supervisors: Attitude toward supervisors as authority figures",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Cannot be trusted",
            "Questionable at times",
            "Generally trustworthy",
            "Reliable; Dependable",
            "Consistently trustworthy"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_4",
          "label": "4. TRUSTWORTHY: Reliable and trusting in relations with others",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Troublemaker; Poor relations",
            "Has difficulty; Quick to argue",
            "Usually cooperative",
            "Gets along well",
            "Excellent relations"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_5",
          "label": "5. COOPERATION – Co-workers: Ability to get along with others",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Self-centered; Not concerned",
            "Indifferent",
            "Somewhat concerned",
            "Attentive; Group oriented",
            "Actively concerned"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_6",
          "label": "6. CONCERN FOR OTHERS: Interest in co-workers welfare",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Refuses; Poor acceptance",
            "Indifferent; Apathetic",
            "Generally accepting",
            "Accepts well",
            "Actively accepting"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_7",
          "label": "7. ACCEPTING CORRECTION: Accepts criticism and correction from supervisors",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Hyperemotional; May be unresponsive",
            "Is easily upset",
            "Usually well-balanced",
            "Good control of feelings",
            "Exceptionally stable"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_8",
          "label": "8. EMOTIONAL STABILITY: Reaction to handling problems or frustration in the work situation",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not join in",
            "Limits participation",
            "Usually participates",
            "Frequently joins in",
            "Always join in"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_9",
          "label": "9. SOCIAL PARTICIPATION: Interacts with co-workers in social activities",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Offers no help",
            "Seldom offers help",
            "Usually offers help",
            "Frequently offers help",
            "Actively helpful"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_10",
          "label": "10. HELPING OTHERS: Offers help or work assistance to co-workers without being told",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Actively refuses; Becomes upset",
            "Displays reluctance; Grudgingly accepts",
            "Accepts change, but needs encouragement",
            "Accepts change",
            "Willingly accepts change"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_11",
          "label": "11. CHANGES IN ROUTINE: Response to change in work routine or job assignment",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "6 or more times per week",
            "3-5 times per week",
            "2 times per week",
            "1 time per week",
            "0 time per week"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "ir_12",
          "label": "12. MAJOR DISRUPTIVE BEHAVIOR: Frequency of major disruptive behavior for a randomly selected work week",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "score-box",
          "name": "ir_total",
          "label": "INTERPERSONAL RELATIONS DOMAIN - RAW SCORE TOTAL"
        }
      ]
    },
    {
      "type": "accordion",
      "label": "COGNITIVE SKILLS DOMAIN (CO)",
      "children": [
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "No concept of numbers",
            "Does simple addition",
            "Simple addition and subtraction",
            "Adds, subtracts, and multiplies",
            "Uses all number skills"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_1",
          "label": "1. NUMBERS: Ability to add, subtract, multiply, and divide correctly",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Uses non-verbal language",
            "Some verbal and manual",
            "Generally verbal",
            "Uses verbal expression well",
            "Excellent verbal use"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_2",
          "label": "2. COMMUNICATION MODE: Uses gestures, signs, or verbal expression to communicate",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Poor memory; Limited recall",
            "Often forgets simple information",
            "Usually recalls procedures and information",
            "Good recall of information",
            "Excellent recall for details"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_3",
          "label": "3. MEMORY: Remembers orally given information or work instructions",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Non-reader",
            "Reads various survival signs",
            "Reads grade levels 3-5",
            "Reads grade levels 6-8",
            "Reads above 8th grade"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_4",
          "label": "4. READING LEVEL: Reads with comprehension or understanding",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "No understanding of time concepts",
            "Understands one out of four concepts",
            "Understands two out of four concepts",
            "Understands three out of four concepts",
            "Understands all time concepts"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_5",
          "label": "5. TIME CONCEPT: Knows the meaning of the concepts – yesterday, tomorrow, day after tomorrow, and days of the week",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "No attempt to write or print",
            "Writes or prints own name",
            "Writes or prints up to two words",
            "Writes or prints simple messages",
            "Writes letters with correct grammar"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_6",
          "label": "6. WRITING: Ability to communicate in print or cursive writing",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Cannot tell time",
            "Tells time by the hour",
            "Tells time to the half hour",
            "Tells time by 5-minute intervals",
            "Tells time to the minutes"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_7",
          "label": "7. TELLING TIME: Tells time correctly on a standard face clock or watch",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Answers phone; Takes no messages",
            "Converses; Takes simple messages",
            "Uses phone to call familiar numbers",
            "Uses pay telephone",
            "Gets information from directories"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_8",
          "label": "8. TELEPHONE: Receives and makes phone calls and uses telephone white and yellow pages",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Grossly limited",
            "Measures to the inch",
            "Measures to the 1/2 inch",
            "Measures to the 1/4 inch",
            "Measures to the 1/16 inch"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_9",
          "label": "9. MEASURING: Ability to measure items of different lengths accurately",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Cannot manage money",
            "Manages with close supervision",
            "Manages with occasional supervision",
            "Manages with minimal supervision",
            "Manages own money"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_10",
          "label": "10. MANAGING MONEY: Banking, budgeting, and daily money handling tasks",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Grossly limited",
            "Frequently makes errors",
            "Makes few errors",
            "Nearly perfect discrimination",
            "Perfect discrimination"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_11",
          "label": "11. DISCRIMINATION SKILLS: Ability to match or sort items by size",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not make needs known",
            "Seldom describes needs",
            "Generally makes needs known",
            "Often describes needs",
            "Regularly states needs"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_12",
          "label": "12. COMMUNICATING BASIC NEEDS: Informs supervisor of thirst, hunger, toilet, illness, or other basic needs",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Becomes confused; Unable to follow",
            "Has difficulty with simple instructions",
            "Follows most instructions fairly well",
            "Follows most instructions well",
            "Skillfully follows all instructions"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_13",
          "label": "13. FOLLOWING VERBAL INSTRUCTIONS: Ability to carry out work instructions",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Almost none; Inferior",
            "Somewhat limited",
            "Generally knowledgeable",
            "Good understanding of most phases",
            "Excellent understanding of all phases"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_14",
          "label": "14. KNOWLEDGE OF WORK: Understands the current job and methods or materials used",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Unable to transfer with help",
            "Transfers with much help",
            "Transfers with moderate help",
            "Transfers with little help",
            "Actively transfers skills"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_15",
          "label": "15. TRANSFER OF SKILLS: Ability to transfer skills acquired on one task to a new task",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Almost never",
            "Seldom finds solutions",
            "Usually makes progress",
            "Solves most problems",
            "Solves all problems"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_16",
          "label": "16. SOLVING PROBLEMS: Solves own problems with job tasks or co-workers",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Unable to learn",
            "Slow in learning",
            "Moderate learner",
            "Fast learner",
            "Very rapid learner"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_17",
          "label": "17. LEARNING JOB TASKS: Ability to learn job assignments with help",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Disorganized; Consistently makes incorrect decisions",
            "Somewhat limited; Frequently makes incorrect decisions",
            "Generally logical; Usually makes correct decisions",
            "Plans well; Frequently makes correct decisions",
            "Resourceful; Consistently makes correct decisions"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_18",
          "label": "18. JUDGEMENT: Ability to make work-related decisions",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Cannot travel independently",
            "Uses public transit between learned sites",
            "Uses public transit between unfamiliar sites",
            "Uses personal transportation",
            "Makes long distance trips"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "co_19",
          "label": "19. INDEPENDENT TRAVEL: Uses public or private conveyance independently to work",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "score-box",
          "name": "co_total",
          "label": "COGNITIVE SKILLS DOMAIN - RAW SCORE TOTAL"
        }
      ]
    },
    {
      "type": "accordion",
      "label": "WORK PERFORMANCE SKILLS DOMAIN (WP)",
      "children": [
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Almost never",
            "Makes few corrections",
            "Corrects most errors",
            "Corrects all but a few",
            "Corrects all errors"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_1",
          "label": "1. CORRECTING ERRORS: Controls own quality of work",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Consistently inferior work",
            "Frequently below requirements",
            "Meets requirements",
            "Frequently above requirements",
            "Regularly above requirements"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_2",
          "label": "2. QUALITY OF WORK: Maintains production standards of neatness and accuracy of tasks or product produced",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Almost never",
            "Often needs to be shown",
            "Usually initiates",
            "Often initiates; Self-reliant",
            "Always initiates; Highly self-directed"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_3",
          "label": "3. INITIATING TASK: Self-initiates daily work routine",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Limited output; Below 25% of norm",
            "Low output; 25-49% of norm",
            "Moderate output; 50-75% of norm",
            "High output; 76-90% of norm",
            "Extended output; Over 90% of norm"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_4",
          "label": "4. QUANTITY OF WORK: Maintains production rates of volume or amount of acceptable work completed",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not ask; Sits idle",
            "Seldom asks; Wastes time",
            "Ordinarily asks",
            "Frequently asks",
            "Actively seeks needed materials"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_5",
          "label": "5. ASKING FOR MATERIALS: Makes requests for needed materials or supplies to complete assignment",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Unreliable; Requires close supervision",
            "Requires frequent checking",
            "Generally reliable",
            "Seldom needs checking",
            "Highly reliable; Conscientious"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_6",
          "label": "6. DEPENDABILITY: Fulfills assignments in a reliable and dependable manner",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Requires constant supervision",
            "Often requires assistance",
            "Occasionally requires assistance",
            "Seldom requires assistance",
            "Independent; Requires no assistance"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_7",
          "label": "7. INDEPENDENT FUNCTIONING: Amount of supervision required after initial instruction period",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not seek needed help",
            "Seldom seeks needed help",
            "Usually seeks needed help",
            "Frequently seeks needed help",
            "Always seeks needed help"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_8",
          "label": "8. REQUEST HELP WHEN NEEDED: Seeks necessary help or assistance from supervisors in the work area",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Requires constant reminding",
            "Requires frequent reminding",
            "Generally returns items",
            "Nearly always returns items",
            "Regularly returns items"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_9",
          "label": "9. TOOL RETURN: Returns tools or supplies to appropriate location after use",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Inattentive; Distractable",
            "Often wastes time",
            "Generally keeps busy",
            "Steady worker",
            "Extremely industrious"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_10",
          "label": "10. ATTENDING TO TASK: Amount of effort applied to the job assignment",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not clean up",
            "Does some cleaning",
            "Does a fair job",
            "Does a good job",
            "Does a thorough cleaning"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_11",
          "label": "11. MAINTAINING WORK AREA: Cleans up work area during and after production",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Consistently makes errors",
            "Oftens makes errors",
            "Occasionally makes errors",
            "Rarely makes errors",
            "Makes no errors"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_12",
          "label": "12. TIME CLOCK: Clocks in and out correctly when arriving in the morning and leaving after work",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Minimal; Less than 10 minutes",
            "Low Moderate; 11-30 minutes",
            "Moderate; 31-60 minutes",
            "High Moderate; 61-120 minutes",
            "Extended; More than 2 hrs."
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_13",
          "label": "13. WORK STEADINESS: The amount of time spent in steady or productive work during a randomly selected work period",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Breaks equipment; Careless",
            "Often misuses equipment",
            "Occasionally misuses equipment",
            "Rarely misuses equipment",
            "Consistent proper use"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_14",
          "label": "14. CARE OF EQUIPMENT: Uses tools and equipment properly on job assignment",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Does not comply",
            "Seldom complies; Takes chances",
            "Usually careful; Takes few chances",
            "Careful worker; Rarely takes chances",
            "Complies with all regulations"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_15",
          "label": "15. SAFETY PRACTICE: Compliance with safety rules and regulations to minimize accidents",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Rarely or never reports problems; 0-24% of the time",
            "Seldom reports problems; 25-49% of the time",
            "Usually reports problems; 50-75% of the time",
            "Often reports problems; 76-89% of the time",
            "Always reports problems; 90-100% of the time"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_16",
          "label": "16. COMMUNICATING PROBLEMS: Reports problems in the work area to supervisors",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Minimal endurance and energy",
            "Tires easily; Often needs rest",
            "Fairly good endurance",
            "Good endurance; Rarely needs to rest",
            "Exceptionally vigor and energy"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_17",
          "label": "17. PHYSICAL STAMINA: Physical capacity to maintain a fairly consistent work pace for a normal work day",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Poor finger dexterity",
            "Has difficulty; Slow",
            "Fairly good dexterity",
            "Good precision skill",
            "Excellent precision skill"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_18",
          "label": "18. FINE MOTOR SKILL: Finger manipulation of small parts or small products assembling",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Limited manual skill",
            "Clumsy; Very slow",
            "Generally good manual skill",
            "Good manual skill",
            "Excellent manual skill"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_19",
          "label": "19. MANUAL SKILL: Working with the hand or hands in stapling, sorting, or machine operating and other manual tasks",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Poor motor coordination",
            "Awkward; Unsteady",
            "Fairly good coordination",
            "Good motor coordination",
            "Exceptional motor coordination"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_20",
          "label": "20. GROSS MOTOR SKILL: Coordination of arms and legs in tasks requiring lifting, carrying, pushing, or pulling",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Wanders constantly",
            "Often wanders from work area",
            "Occasionally may leave work area",
            "Seldom leaves work station",
            "Regularly at work station"
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_21",
          "label": "21. WORK STATION: Remains in the immediate work area and does not wander",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "grid-header",
          "label": "",
          "cols": [
            "Sedentary work; Lift to 10lbs.",
            "Light work; Lift to 20lbs.",
            "Medium work; Lift to 50lbs.",
            "Heavy work; Lift to 75lbs.",
            "Very heavy work; Lift to over 75lbs."
          ],
          "wideLabel": false,
          "template": "200px repeat(5, 1fr)",
          "style": {
            "marginBottom": 2,
            "paddingBottom": 4
          }
        },
        {
          "type": "radio-matrix",
          "name": "wp_22",
          "label": "22. PHYSICAL STRENGTH: Ability to lift, carry, push, or pull objects of various weights",
          "helper": "",
          "options": [
            {
              "value": 0,
              "label": "0"
            },
            {
              "value": 1,
              "label": "1"
            },
            {
              "value": 2,
              "label": "2"
            },
            {
              "value": 3,
              "label": "3"
            },
            {
              "value": 4,
              "label": "4"
            }
          ],
          "matrixHeaderLabel": "Score",
          "wideLabel": false
        },
        {
          "type": "score-box",
          "name": "wp_total",
          "label": "WORK PERFORMANCE SKILLS DOMAIN - RAW SCORE TOTAL"
        }
      ]
    },
    {
      "type": "accordion",
      "label": "INDIVIDUAL PROFILE FORM",
      "children": [
        {
          "type": "score-box",
          "name": "grand_total",
          "label": "TOTAL PROFILE SCORE"
        },
        // {
        //   "type": "custom"
        // },
        // {
        //   "type": "custom"
        // }
      ]
    }
  ]
}