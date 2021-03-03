# 没有key的时候
## 更新前

ul
    li 1
    li 2
    li 3
    li 4

## 更新后
ul
    li 2
    li 3
    li 4

## 于是对比逻辑是
ul       ->   ul             = 不变         = 无dom操作
    li 1   ->     li 2       = 1 变成了 2   = **更新**dom操作
    li 2   ->     li 3       = 2 变成了 3   = **更新**dom操作
    li 3   ->     li 4       = 3 变成了 4   = **更新**dom操作
    li 4   ->                = 4 删除了     = **删除**dom操作


# 加了key以后
## 更新前
ul
    li 1 key 1
    li 2 key 2
    li 3 key 3
    li 4 key 4

## 更新后
ul
    li 2 key 2
    li 3 key 3
    li 4 key 4

## 于是对比逻辑是
ul       ->   ul                            = 不变      = 无dom操作
    li 1 key 1   ->        null             = 删除      = **删除**dom操作
    li 2 key 2   ->     li 2 key 2          = 不变      = 无dom操作
    li 3 key 3   ->     li 3 key 3          = 不变      = 无dom操作
    li 4 key 4   ->     li 3 key 4          = 不变      = 无dom操作

