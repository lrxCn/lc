[address](https://github.com/amandakelake/blog/issues/41)
## 缓存优先级
1. 强缓存：不给后端发请求
   1. Pragma：no-cache，禁用强缓存
   2. Cache-control:
      1. max-age单位秒
      2. no-cache：禁用强缓存
      3. no-store：禁用任何缓存
   3. Expires：http日期
2. 协商缓存：给后端发送了请求，返回了304
   1. 后端返回了etag和last-modified
   2. 再次请求的时候
   ```
   header:{
       if-modified-since:last-modified,
       if-none-match:none
   }
   ```
   后端去比较，304/200
3. 不缓存