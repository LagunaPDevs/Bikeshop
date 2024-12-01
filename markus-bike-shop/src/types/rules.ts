export interface Rule {
  id?: number;
  name: string;
  isActive: boolean;
  conditions: RuleCondition[];
}
export type RuleCondition = { [key: string]: string | number | boolean | any };

export interface BicycleRule extends Rule {
  type: BicycleRuleType;
  value: string;
}

export type BicycleRuleType = "frame" | "wheel" | "chain";
