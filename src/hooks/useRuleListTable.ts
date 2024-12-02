import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { BicycleRule } from "../types/rules";
import {
  deleteRule,
  getRuleByID,
  getRules,
  updateRule,
} from "../services/apiRules";

export default function useRuleListTable() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [rules, setRules] = useState<BicycleRule[]>([]);
  useEffect(() => {
    getRulesFromDatabase();
  }, []);

  async function getRulesFromDatabase() {
    try {
      setIsLoading(true);
      const result = await getRules();
      if (result.length > 0) {
        setRules([...result]);
      } else {
        setRules([]);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }
  async function removeRule(id: number) {
    try {
      setIsLoading(true);
      await deleteRule(id);
      await getRulesFromDatabase();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  async function enableDisableRule(id: number) {
    try {
      setIsLoading(true);
      const result = await getRuleByID(id);
      if (result) {
        let updatedRule: BicycleRule = result[0];
        updatedRule.isActive = !updatedRule.isActive;
        await updateRule(updatedRule, id);
        await getRulesFromDatabase();
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  const addNewRule = () => {
    navigate("/add-rule");
  };
  return { isLoading, rules, removeRule, enableDisableRule, addNewRule };
}
