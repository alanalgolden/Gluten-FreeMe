import { FetchDataChat } from "../../core/utils/completions";
import { checkCache, checkServer, createMealPlanDoc } from "./MealPlanCrud";

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
      } else if (planAction === "DISPLAY") {
        console.log(`${planAction} Attempting to Link...`);
        return "DISPLAY";
      }
    }
  } catch (error) {
    console.error(error);
  }
}
