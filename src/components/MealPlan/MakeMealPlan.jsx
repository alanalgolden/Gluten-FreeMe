import { useState } from "react";
import { FetchDataChat } from "../../core/utils/completions";
import { checkCache, checkServer } from "./MealPlanCrud";
import { user } from "../../core/Providers/UserProvider";

const uid = user;

export async function mealPlanInit() {
  let mealPlanHigh = "";
  const BLANK = "BLANK";

  try {
    const mealPlan = await FetchDataChat(`
      "Fill in the blanks for a 7 day meal plan with breakfast lunch and dinner. Average calorie count per meal should be 500. 
      Only give the names of the recipes and their est nutrition facts. 
      All recipes should be Gluten Free and Tree Nut Free. Json Format. 
      "
      {
        "Monday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Tuesday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Wednesday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Thursday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Friday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Saturday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "Sunday": {
          "breakfast": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        }"
    `);
    let mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);
    const splitVar = mealPlan.data.choices[0].message.content;
    console.log(mealPlanHigh.Monday.breakfast.name);
    console.log(mealPlanHigh);
    console.log(splitVar);

    //need to add data to put into each of the array locations
  } catch (error) {
    console.error(error);
  }

  checkServer(uid, mealPlanHigh);
}
