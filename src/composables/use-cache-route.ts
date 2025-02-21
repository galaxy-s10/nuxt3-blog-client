export function useCacheRoute(seconds = 60 * 5) {
  const { query } = useRoute();
  // https://nuxt-multi-cache.dulnan.net/composables/useRouteCache
  useRouteCache((helper) => {
    // WARN 这里根据自己的业务进行缓存！
    // 当地址栏没有参数的时候，则认为当前路由不是动态路由，让它进行缓存。
    if (!Object.keys(query).length) {
      helper.setCacheable().setMaxAge(seconds);
    }
  });
}
