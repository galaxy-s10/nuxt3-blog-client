#!/usr/bin/env bash
###
# Author: shuisheng
# Date: 2022-08-09 12:55:48
# Description: https://github.com/galaxy-s10/sh/
# Email: 2274751790@qq.com
# FilePath: /nuxt3-blog-client/deploy/nuxt-pm2.sh
# Github: https://github.com/galaxy-s10
# LastEditors: shuisheng
# LastEditTime: 2025-02-22 17:54:28
###

# 生成头部文件快捷键: ctrl+cmd+i

# nuxt项目, 一般流程是在jenkins里面执行nuxt-build.sh进行构建,
# 构建完成后会连接ssh, 执行/node/sh/nuxt.sh, nuxt.sh会将构建的完成资源复制到/node/xxx, 并且执行/node/xxx/nuxt-pm2.sh
# 最后, 服务器的/node/sh/nuxt.sh会执行清除buff/cache操作

# 注意: JOBNAME=$1, 这个等号左右不能有空格!
JOBNAME=$1      #约定$1为任务名
ENV=$2          #约定$2为环境
WORKSPACE=$3    #约定$3为Jenkins工作区
PORT=$4         #约定$4为端口号
TAG=$5          #约定$5为git标签
PUBLICDIR=/node #约定公共目录为/node

echo 查看node版本:
node -v

echo 查看npm版本:
npm -v

echo 设置npm淘宝镜像:
npm config set registry https://registry.npmmirror.com/

echo 查看当前npm镜像:
npm get registry

if ! type pnpm >/dev/null 2>&1; then
  echo 'pnpm未安装,先全局安装pnpm'
  npm i pnpm -g
else
  echo 'pnpm已安装'
fi

echo 查看pnpm版本:
pnpm -v

echo 设置pnpm淘宝镜像:
pnpm config set registry https://registry.npmmirror.com/
pnpm config set @billd:registry https://registry.hsslive.cn/

echo 查看当前pnpm镜像:
pnpm config get registry
pnpm config get @billd:registry

if ! type pm2 >/dev/null 2>&1; then
  echo 'pm2未安装,先全局安装pm2'
  npm install pm2 -g
  pm2 update
else
  echo 'pm2已安装'
fi

echo 查看pm2版本:
pm2 -v

# 注意：要先进入项目所在的目录，然后再执行pm2命令!!!
# 否则的话约等于在其他目录执行npm run dev,如果所在的目录没有package.json文件就会报错！
if [ $ENV != 'null' ]; then
  cd $PUBLICDIR/$JOBNAME/$ENV
else
  cd $PUBLICDIR/$JOBNAME/
fi

echo 删除旧的pm2服务:
pm2 del $JOBNAME-$ENV-$PORT

echo 使用pm2维护:
# pm2 start './.output/server/index.mjs' --name nuxt-blog-client-null-3000 -i 1 -- start
export PORT=$PORT && pm2 start './.output/server/index.mjs' --name $JOBNAME-$ENV-$PORT -i 1

# pm2-runtime start './node_modules/nuxt/bin/nuxt.js' --name nuxt-blog-client-null-3000 -i 2 -- start
# pm2-runtime start './node_modules/nuxt/bin/nuxt.js' --name $JOBNAME-$ENV-$PORT -i 2 -- start
