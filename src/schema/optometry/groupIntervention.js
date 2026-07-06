import { ACTIONS_BUTTON } from "../actions";

const SUBJECTIVE = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [

        {
          "name": "session_for",
          "label": "Session For",
          "type": "radio",
          "options": [
            { "label": "Education Program", "value": "education_program" },
            { "label": "Leisure Activities", "value": "leisure_activities" },
            { "label": "Group Support", "value": "group_support" }
          ]
        },
        {
          "type": "subheading",
          "label": "Consent"
        },
        {
          "name": "client_best_interest",
          "label": "Client was in his/her best interest",
          "type": "radio",
          "options": [
            { "label": "Yes", "value": "yes" },
            { "label": "No", "value": "no" }
          ]
        }
      ]
    }
  ]
};

const OBJECTIVE = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [

        {
          "name": "topics",
          "label": "Topics",
          "type": "input"
        },
        {
          "name": "strategies",
          "label": "Strategies",
          "type": "input"
        },
        {
          "name": "objectives",
          "label": "Objective(s)",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "objective_text",
              "label": "Objective",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
};

const ASSESSMENT = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [

        {
          "name": "activities",
          "label": "Activities",
          "type": "dynamic-section",
          "fields": [
            {
              "name": "activity",
              "label": "Activity",
              "type": "input"
            },
            {
              "name": "comment_remark",
              "label": "Comment / Remark",
              "type": "input"
            }
          ]
        }
      ]
    }
  ]
};

const PLAN = {
  "title": "",
  "actions": ACTIONS_BUTTON,
  "sections": [
    {
      "fields": [

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
        }
      ]
    }
  ]
};

export default {
  PLAN,
  OBJECTIVE,
  SUBJECTIVE,
  ASSESSMENT,
};
