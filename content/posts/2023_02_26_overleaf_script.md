---
title: "Overleaf Scripts"
date: 2023-02-26
type: "post"
tags: ["Utilities"]
showTableOfContents: True
---

## Useful Scipts that I used in Overleaf

### Figures

```markdown
\begin{figure}[h]
    \begin{subfigure}{0.5\textwidth}
        \centering \includegraphics[scale=0.2]{--}
        \caption{---}
        \label{---}
    \end{subfigure}
    \hfill
    \begin{subfigure}{0.5\textwidth}   
        \centering \includegraphics[scale=0.2]{--}
        \caption{---}
        \label{---}
    \end{subfigure}
    
    \caption{---}
    \label{4.3_dag}
\end{figure}

\begin{figure}[h]
    \centering \includegraphics[scale=0.2]{---}
    \caption{---}
    \label{---}
\end{figure}

\begin{figure}[H]
  \subfloat[]{%
  \begin{minipage}{\linewidth}
  \centering
  \includegraphics[width=.7\linewidth]{Project101/res/project_excution/pie.png}
  \end{minipage}%
  }\par
  \subfloat[]{%
  \begin{minipage}{\linewidth}
  \centering
  \includegraphics[width=.7\linewidth]{Project101/res/project_excution/line.png}
  \end{minipage}%
  }\par
  \subfloat[]{%
  \begin{minipage}{\linewidth}
  \centering
  \includegraphics[width=.7\linewidth]{Project101/res/project_excution/bar.png}
  \end{minipage}%
  }
  \caption{Question displayed and the TSRI scale}
  \label{qandtsri}
\end{figure}
```

### Tables

```markdown
\begin{table}[H]
\begin{center}
\begin{tabular}{||c c c c||} 
 \hline
 Col1 & Col2 & Col2 & Col3 \\ [0.5ex] 
 \hline\hline
 1 & 6 & 87837 & 787 \\ 
 \hline
 2 & 7 & 78 & 5415 \\
 \hline
 3 & 545 & 778 & 7507 \\
 \hline
 4 & 545 & 18744 & 7560 \\
 \hline
 5 & 88 & 788 & 6344 \\ [1ex] 
 \hline
\end{tabular}
\end{center}
\end{table}
```