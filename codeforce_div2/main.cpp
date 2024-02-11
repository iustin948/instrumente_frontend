#include <iostream>
#include <algorithm>
using namespace std;
pair <int, int> v[200005];


int t, n, m;

int main()
{
    cin >> t;
    for(int i = 1; i <= t; i++)
    {
        cin >> n;
        for(int j = 1; j <= n ;j++)
            cin >> v[j].first;

        for(int j = 1; j <= n ;j++)
            cin >> v[j].second;

        int cnt_MAX = 0;
        sort(v+1, v + n + 1);

            for(int j = 1; j <= n; j++)
                cout << v[j].first << " ";
            cout << "\n";
            for(int j = 1; j <= n; j++)
                cout << v[j].second << " ";
                cout << "\n";


    }
    return 0;
}
