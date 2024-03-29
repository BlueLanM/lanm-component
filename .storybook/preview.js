import { configure, addDecorator } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
const wrapperStyle = {
  // width: '900px',
  padding: "0px 40px",
  // margin: "0 auto",
};
const storyWrapper = (stroyFn) => {
  return <div style={wrapperStyle}>{stroyFn()}</div>;
};

// 通过 addDecorator 添加插件
addDecorator(storyWrapper);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#FFFFFF",
      },
      // {
      //   name: 'dark',
      //   value: '#000000',
      // },
    ],
  },
  controls: {
    expanded: false,
  },
};

// 将 welcome 文档说明置于顶部
const loaderFn = () => {
  const allExports = [require("../src/Welcome.stories.mdx")];
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?33f65032ec6668200f5287b616afbf25";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
