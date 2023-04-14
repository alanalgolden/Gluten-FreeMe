import { FetchDataChat } from "../../core/utils/completions";
import { checkCache, checkServer, createMealPlanDoc } from "./MealPlanCrud";

let mealPlan = ``;

export const askForMeal = async (
  dietarychoices,
  allergens,
  restrictions,
  prepdays
) => {
  console.log(allergens);
  console.log(allergens.join(", "));

  try {
    let mealPlan = await FetchDataChat(`
  "You will copy the following JSON schema for 7 days and fill in blanks with a meal plan.
  Each day will include 3 meals: breafast, lunch, and dinner.
  Give names for each meal, use real recipe names.
  Estimate the nutrition based on the meal name.

  This plan is for a person with the following, it is IMPORTANT to consider and include these for ALL meals generated:
  - allergies: ${allergens.join(", ")}
  - dietary choices: ${dietarychoices}
  - restrictions: ${restrictions.join(", ")}
  
  Only cook and do meal preperation on: ${prepdays.join(", ")}
  Meals can be leftovers that were prepared on those days

  
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
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      },
      "lunch": {
        "name": BLANK,
        "nutrition": {
          "calories": BLANK,
          "fat": BLANK,
          "carbohydrate": BLANK,
          "protein": BLANK
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      },
      "dinner": {
        "name": BLANK,
        "nutrition": {
          "calories": BLANK,
          "fat": BLANK,
          "carbohydrate": BLANK,
          "protein": BLANK
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      }
    }
  }`);
    return mealPlan;
  } catch (e) {
    console.log(e);
  }
};

export async function mealPlanInit(user) {
  let mealPlanHigh = undefined;

  const BLANK = "BLANK";

  try {
    if (user === undefined || null) {
      console.log("No user!");
      return;
    }

    if ((await checkCache(user, mealPlanHigh)) === undefined) {
      console.log("No meal plan found in CACHE");

      if ((await checkServer(user, mealPlanHigh)) === undefined) {
        console.log("No meal plan found in SERVER");
        console.log("Creating Meal Plan...");

        askForMeal();
        /*         const mealPlan = await FetchDataChat(`
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
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
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "lunch": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            },
            "dinner": {
              "name": BLANK,
              "nutrition": {
                "calories": BLANK,
                "fat": BLANK,
                "carbohydrate": BLANK,
                "protein": BLANK
              },
              "preferences": {
                "dietarychoices": BLANK,
                "allergies": BLANK,
                "restrictions": BLANK,
                "days": BLANK
              }
            }
          }
        }
        `); */

        while (mealPlanHigh === undefined) {
          try {
            console.log(`Trying to parse ${{ ...mealPlan }}`);
            mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);
            //TODO : This needs to be improved with better UI / passes, basic function for testing
            console.log(`Doc found for ${user} in CACHE!`);
            let planAction = prompt("DISPLAY or REGEN?");
            if (planAction === "REGEN") {
              console.log(`${planAction} is not yet programmed.`);
            } else if (planAction === "DISPLAY") {
              console.log(`${planAction} Attempting to Link...`);
              return "DISPLAY";
            }
          } catch (e) {
            console.log(e);
            console.log("JSON Parse FAILED. Trying again GPT again...");

            askForMeal();
            /*             const mealPlan = await FetchDataChat(`
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
          `); */

            mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);
            console.log(`JSON Parse Worked! ${mealPlanHigh}`);
          }
        }

        createMealPlanDoc(user, mealPlanHigh);
        console.log(mealPlanHigh);
      } else {
        console.log(`Document UID ${user} already exists!`);
        let regenDoc = prompt("DISPLAY or REGEN?");
        console.log(regenDoc);
      }
    } else {
      //TODO : This needs to be improved with better UI / passes, basic function for testing
      console.log(`Doc found for ${user} in CACHE!`);
      let planAction = prompt("DISPLAY or REGEN?");
      if (planAction === "REGEN") {
        console.log(`${planAction} is not yet programmed.`);
        return "REGEN";
      } else if (planAction === "DISPLAY") {
        console.log(`${planAction} Attempting to Link...`);
        return "DISPLAY";
      }
    }
  } catch (error) {
    console.error(error);
  }
}
