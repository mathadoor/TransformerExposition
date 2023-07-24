// Copyright 2018 The Distill Template Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import configs from "./rollup.config.common";
import { terser } from 'rollup-plugin-terser';
import replace from "rollup-plugin-replace";

// Enable minification (compression) of the JavaScript code
configs.forEach(config => config.plugins.push(terser()));

// Set the mode to production
configs[2].plugins = configs[2].plugins.map(plugin => {
  if (plugin.name === 'replace') {
    return replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    });
  }
  return plugin;
});

export default configs;
