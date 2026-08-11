import { ACTIONS_BUTTON } from "../actions";

const SUBJECTIVE = {
  actions: ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "name": "chief_complaint",
          "label": "Chief Complaint",
          "type": "input"
        },
        {
          "name": "hpi",
          "label": "History of Present Illness",
          "type": "input"
        },
        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            {
              "label": "Education Program ",
              "value": "education_program"
            },
            {
              "label": "Leisure Activities",
              "value": "leisure_activities"
            },
            {
              "label": "Group Support",
              "value": "group_support"
            }
          ]
        },
        {
          "name": "consent",
          "label": "Consent",
          "type": "checkbox-group",
          "options": [
            {
              "label": "Client was in his/her best interest.",
              "value": "yes"
            }
          ]
        }
      ]
    }
  ]
}

const OBJECTIVE = {
  actions: ACTIONS_BUTTON,
   "sections":[
      {
         "fields":[
            {
               "name":"topics",
               "label":"Topics",
               "type":"input"
            },
            {
               "name":"strategies",
               "label":"Strategies",
               "type":"input"
            },
            {
               "name":"objectives",
               "label":"Objective(s)",
               "type":"dynamic-section",
               "fields":[
                  {
                     "name":"objective",
                     "label":"Objective",
                     "type":"input"
                  }
               ]
            }
         ]
      }
   ]
}

const ASSESSMENT = {
  actions: ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "type": "input",
          "name": "clinical_impression",
          "label": "Clinical Impression"
        },
        {
          "name": "activities",
          "label": "",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "activity",
              "label": "Activity",
              "type": "input"
            },
            {
              "name": "remark",
              "label": "Comment / Remark",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
}

const PLAN = {
  actions: ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [
        {
          "type": "subheading",
          "label": "Short Term Goals (2–4 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "short_term_goals"
        },
        {
          "type": "subheading",
          "label": "Long Term Goals (6–12 Weeks)"
        },
        {
          "type": "dynamic-goals",
          "name": "long_term_goals"
        },
        {
          "name": "plan",
          "label": "Plan",
          "type": "input"
        },
        {
          "name": "comment",
          "label": "Comment",
          "type": "input"
        },
        {
          "name": "remark",
          "label": "Remark",
          "type": "input"
        },
        {
          "name": "participants",
          "label": "Participants",
          "type": "dynamic-section",
          "addMoreText": "This entry will be link directly to all client’s records",
          "fields": [
            {
              "name": "clientName",
              "label": "Client’s Name",
              "type": "input"
            },
            {
              "name": "idNo",
              "label": "ID No",
              "type": "input"
            },
            {
              "name": "mrnNo",
              "label": "MRN No",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
}

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
