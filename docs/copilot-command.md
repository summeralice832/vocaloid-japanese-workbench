# Copilot调用指令：读取整首歌词提示词
@docs/full-song-prompt.md
读取这份文件里的一体化提示词，处理下面整首术曲歌词。逐句解析，逐句自检校对，严格遵守输出格式，只输出最终markdown成品，不要多余文字。

整首歌词：
【粘贴你的整首日语歌词】

---
# Copilot调用指令：单句解析提示词（读取原来的prompt-library.md）
@docs/prompt-library.md
读取文件内【主提示词：解析一句歌词】，处理下面这一句日语歌词，严格遵守输出规则，只输出markdown结果，不要多余解释。
歌词单句：
【粘贴单句日语】

---
# 追加通用指令：将生成结果写入歌曲md文件
把刚刚全部生成的markdown结果，追加写入 docs/songs/example-song.md




---
# 高精度双轮交叉校对（消耗2次额度）
## 第一步：生成初稿
@docs/prompt-library.md
读取【主提示词：解析一句歌词】处理这句歌词，输出markdown
歌词：
【粘贴句子】

## 第二步：把上一步输出的结果，再用下面指令做二次校验
@docs/prompt-library.md
读取【交叉校对提示词（第二轮校验）】，核对上面这份解析结果，修正语法、重音错误，只输出校对后的markdown。
