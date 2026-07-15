import { ACTIONS_BUTTON } from "../actions";

const SUBJECTIVE = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        {
          name: "session_for",
          label: "Session For",
          type: "radio",
          options: [
            { label: "Education Program", value: "education_program" },
            { label: "Leisure Activities", value: "leisure_activities" },
            { label: "Group Support", value: "group_support" },
          ],
        },
        {
          type: "subheading",
          label: "Consent",
        },
        {
          name: "consent",
          label: "Client was in his/her best interest",
          type: "radio",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
      ],
    },
  ],
};

const OBJECTIVE = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        {
          name: "topics",
          label: "Topics",
          type: "input",
        },
        {
          name: "strategies",
          label: "Strategies",
          type: "input",
        },
        {
          name: "objectives",
          label: "Objective(s)",
          type: "dynamic-section",
          fields: [
            {
              name: "objective",
              label: "Objective",
              type: "input",
            },
          ],
        },
      ],
    },
  ],
};

const ASSESSMENT = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        {
          name: "activities",
          label: "",
          type: "dynamic-section",
          fields: [
            {
              name: "activity",
              label: "Activity",
              type: "input",
            },
            {
              name: "remark",
              label: "Comment / Remark",
              type: "input",
            },
          ],
        },
      ],
    },
  ],
};

const PLAN = {
  title: "",
  actions: ACTIONS_BUTTON,
  sections: [
    {
      fields: [
        {
          name: "plan",
          label: "Plan",
          type: "input",
        },
        {
          name: "comment",
          label: "Comment",
          type: "input",
        },
        {
          name: "remark",
          label: "Remark",
          type: "input",
        },
      ],
    },
  ],
};

export default {
  SUBJECTIVE,
  OBJECTIVE,
  ASSESSMENT,
  PLAN,
};
