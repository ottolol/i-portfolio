import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  icon: string;
  title: string;
  text: string;
};

export function Skill(props: SkillPropsType) {
  return (
    <div>
      <Icon
        iconId={props.icon}
        width="113"
        height="101"
        viewBox="0 0 113 101"
      />
      <h2>{props.title}</h2>
    </div>
  );
}
