import type { MetaRecord } from 'nextra';

const cn = 'whitespace-nowrap text-ellipsis';

export default {
  cluster: <span className={cn}>cluster</span>,
  'cluster-install': <span className={cn}>cluster install</span>,
  'cluster-list': <span className={cn}>cluster list</span>,
  'cluster-uninstall': <span className={cn}>cluster uninstall</span>,
  'cluster-upgrade': <span className={cn}>cluster upgrade</span>,
  'cluster-repo': <span className={cn}>cluster repo</span>,
  'cluster-repo-add': <span className={cn}>cluster repo add</span>,
  'cluster-repo-remove': <span className={cn}>cluster repo remove</span>,
  'cluster-repo-update': <span className={cn}>cluster repo update</span>,
  completion: <span className={cn}>completion</span>,
  'completion-bash': <span className={cn}>completion bash</span>,
  'completion-fish': <span className={cn}>completion fish</span>,
  'completion-powershell': <span className={cn}>completion powershell</span>,
  'completion-zsh': <span className={cn}>completion zsh</span>,
  help: <span className={cn}>help</span>,
  logs: <span className={cn}>logs</span>,
  serve: <span className={cn}>serve</span>,
} satisfies MetaRecord;
