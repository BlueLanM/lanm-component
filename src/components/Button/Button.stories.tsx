import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../style/every.scss";
import ButtonDoc from "./Button-doc.mdx";
import BaseButton, { ButtonProps } from "./Button";

const Button = (args: ButtonProps) => {
  const [size, setSize] = useState("normal");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="example">
        <div className="exa">
          <strong> Button按钮动态实例</strong>
          <BaseButton {...args}></BaseButton>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <section>
            <div className="title">基本使用</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary">primary</BaseButton>
                <BaseButton type="default">default</BaseButton>
                <BaseButton type="secondary">secondary</BaseButton>
                <BaseButton type="success">success</BaseButton>
                <BaseButton type="error">error</BaseButton>
                <BaseButton type="link">link</BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮类型</div>
                按钮有六种类型：主按钮、虚按钮、次按钮、成功按钮、错误按钮、链接按钮。
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">样式风格</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary" variant="container">
                  primary
                </BaseButton>
                <BaseButton type="primary" variant="outlined">
                  primary
                </BaseButton>
                <BaseButton type="default" variant="container">
                  default
                </BaseButton>
                <BaseButton type="default" variant="outlined">
                  default
                </BaseButton>
                <BaseButton type="secondary" variant="container">
                  secondary
                </BaseButton>
                <BaseButton type="secondary" variant="outlined">
                  secondary
                </BaseButton>
                <BaseButton type="success" variant="container">
                  success
                </BaseButton>
                <BaseButton type="success" variant="outlined">
                  success
                </BaseButton>
                <BaseButton type="error" variant="container">
                  error
                </BaseButton>
                <BaseButton type="error" variant="outlined">
                  error
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮风格</div>
                <div>每个类型对应两个风格，填充和线性。</div>
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">按钮大小</div>
            <div className="content">
              <div className="tab">
                <BaseButton onClick={() => setSize("large")}>Large</BaseButton>
                <BaseButton onClick={() => setSize("normal")}>
                  normal
                </BaseButton>
                <BaseButton onClick={() => setSize("small")}>small</BaseButton>
              </div>
              <div className="code_content">
                <BaseButton type="primary" size={size}>
                  primary
                </BaseButton>
                <BaseButton type="secondary" size={size}>
                  secondary
                </BaseButton>
                <BaseButton type="success" size={size}>
                  success
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮尺寸</div>
                按钮有大、中、小三种尺寸。
                <br />
                通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置
                size，则尺寸为中。
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">不可用状态</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary" disabled>
                  primary
                </BaseButton>
                <BaseButton type="success" variant="outlined" disabled>
                  success
                </BaseButton>
                <BaseButton type="error" variant="outlined" disabled>
                  error
                </BaseButton>
                <BaseButton type="success" disabled>
                  success
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮状态</div>
                添加 disabled 属性即可让按钮处于不可用状态。
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">动画添加</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary" anime>
                  primary
                </BaseButton>
                <BaseButton type="secondary" anime>
                  secondary
                </BaseButton>
                <BaseButton type="success" anime>
                  primary
                </BaseButton>
                <BaseButton type="error" anime>
                  error
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮动画</div>
                添加anime属性可以给按钮加上有趣的动效。
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">形状</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary" shape="square">
                  A
                </BaseButton>
                <BaseButton type="success" size="small" shape="circle">
                  B
                </BaseButton>
                <BaseButton type="secondary" size="normal" shape="circle">
                  C
                </BaseButton>

                <BaseButton type="error" size="large" shape="circle">
                  error
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮形状</div>
                shape属性对应两个形状，circle 和 square，默认为square
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">icon图标</div>
            <div className="content">
              <div className="code_content">
                <BaseButton type="primary" icon="plus">
                  plus
                </BaseButton>
                <BaseButton type="secondary" icon="download">
                  Download
                </BaseButton>
                <BaseButton type="success" icon="check">
                  check
                </BaseButton>
                <BaseButton type="error" icon="archive">
                  Delete
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮图标</div>
                icon
              </div>
            </div>
          </section>
        </div>
        <div className="item">
          <section>
            <div className="title">加载状态</div>
            <div className="content">
              <div className="tab">
                <BaseButton type="primary" loading>
                  primary loading
                </BaseButton>
                <BaseButton type="secondary" loading>
                  secondary loading
                </BaseButton>
                <BaseButton type="success" loading>
                  success loading
                </BaseButton>
                <BaseButton type="error" loading>
                  error loading
                </BaseButton>
              </div>
              <div className="tab">
                <BaseButton type="primary" variant="outlined" loading>
                  primary loading
                </BaseButton>
                <BaseButton type="secondary" variant="outlined" loading>
                  secondary loading
                </BaseButton>
                <BaseButton type="success" variant="outlined" loading>
                  success loading
                </BaseButton>
                <BaseButton type="error" variant="outlined" loading>
                  error loading
                </BaseButton>
              </div>
              <div className="code_content">
                <BaseButton
                  type="primary"
                  loading={loading}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  点一下我!
                </BaseButton>
              </div>
              <div className="description">
                <div className="code_title">按钮加载</div>
                loading
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: BaseButton,
  argTypes: {
    anime: { options: [true, false], control: { type: "inline-radio" } },
    disabled: { options: [true, false], control: { type: "inline-radio" } },
    loading: { options: [true, false], control: { type: "inline-radio" } },
    variant: { control: { type: "inline-radio" } },
    shape: { control: { type: "inline-radio" } },
    size: {
      options: ["small", "normal", "large"],
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
  },

  parameters: {
    docs: {
      page: ButtonDoc,
      // source: {
      //   type: "code",
      // },
    },
    layout: "centered",
    // controls: { exclude: ["className", "btnType"] },
  },
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args: any) => (
  <Button {...args} />
);

export const button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
button.args = {
  type: "default",
  variant: "container",
  disabled: false,
  loading: false,
  anime: true,
  size: "normal",
  children: "Button!",
  shape: "square",
  // onClick() {
  // },
};
