import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import iconsCache from "./shared/res";
import copy from "copy-to-clipboard";
import IconDoc from "./Icon-doc.mdx";
import BaseIcon, { IconProps } from "./index";

const buildIcons = (props: IconProps, icons: any) => {
  const { theme } = props;

  return (
    <>
      <h6> 一共支持 {Object.keys(iconsCache).slice(0, 256).length} 种图标 </h6>
      <br />
      <ul
        style={{
          display: "flex",
          flexFlow: "row wrap",
          listStyle: "none",
        }}
      >
        {Object.keys(iconsCache)
          .splice(0, 256)
          .map((key, index) => {
            const iconName = icons[key].iconName;
            const _length = iconName.split("-").length;

            return (
              <li
                className="svgCls"
                onClick={(e) => {
                  copy(iconName);
                }}
                key={index}
              >
                <BaseIcon theme={theme} icon={iconName} />
                <div
                  style={{
                    color: "#666",
                    fontSize: 12,

                    overflow: "hidden",
                  }}
                >
                  <span>{iconName}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

const Icon = (args: IconProps) => {
  return buildIcons(args, iconsCache);
};

export default {
  title: "Icon",
  component: BaseIcon,
  argTypes: {
    //
  },

  parameters: {
    docs: {
      page: IconDoc,
      // source: {
      //   type: "code",
      // },
    },
    layout: "centered",
    // controls: { exclude: ["className", "btnType"] },
  },
} as ComponentMeta<typeof BaseIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseIcon> = (args) => <Icon {...args} />;

export const icon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
icon.args = {
  theme: "primary",
};
